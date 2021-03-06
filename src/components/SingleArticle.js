import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addVote, getSingleArticle } from "../utils/api";
import { formatDate } from "../utils/utils";
import Comments from "./Comments";
import Error from "./Error";
import styles from "../styles/SingleArticle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [votesCount, setVotesCount] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setVotesCount(article.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [article_id]);

  function handleClick(event) {
    event.target.setAttribute("disabled", true);
    setVotesCount((currCount) => currCount + 1);
    addVote(article_id);
  }
  if (isLoading)
    return (
      <Box sx={{ width: "100%", height: "70%" }}>
        <CircularProgress
          color="success"
          className={styles.loadingCircle}
          size="small"
        />
      </Box>
    );
  if (error) {
    return (
      <Error
        status={error.err.response.status}
        message={error.err.response.data.msg}
      />
    );
  }

  return (
    <div className={styles.articleDiv}>
      <h2 className={styles.articleTitle}>{article.title}</h2>
      <h3 className={styles.articleAuthor}>
        Created by {article.author}{" "}
        {moment(formatDate(article.created_at)).fromNow()}
      </h3>
      <p className={styles.articleText}>{article.body}</p>
      <div className={styles.buttonWrapper}>
        <button
          icon="fa-solid fa-thumbs-up"
          onClick={handleClick}
          className={styles.voteButton}
        >
          UPVOTE
          <FontAwesomeIcon icon={faThumbsUp} className={styles.likeIcon} />{" "}
          {votesCount}
        </button>
      </div>
      <Comments article_id={article_id} />
    </div>
  );
}

export default SingleArticle;
