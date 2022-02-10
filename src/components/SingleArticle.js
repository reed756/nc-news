import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addVote, getSingleArticle } from "../utils/api";
import { formatDate } from "../utils/utils";
import Comments from "./Comments";
import Error from "./Error";
import styles from "../styles/SingleArticle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [votesCount, setVotesCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setVotesCount(article.votes);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [article_id]);

  function handleClick() {
    setVotesCount((currCount) => currCount + 1);
    addVote(article_id);
  }
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
        Created by {article.author} on {formatDate(article.created_at)}
      </h3>
      <p className={styles.articleText}>{article.body}</p>
      {/* <p className={styles.articleText}>
        Comment count: {article.comment_count}
      </p>
      <p className={styles.articleText}>Votes: {votesCount}</p> */}
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
