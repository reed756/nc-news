import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addVote, getSingleArticle } from "../utils/api";
import { formatDate } from "../utils/utils";
import Comments from "./Comments";
import Error from "./Error";

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
    <div>
      <h2>{article.title}</h2>
      <h3>
        Created by {article.author} on {formatDate(article.created_at)}
      </h3>
      <p>{article.body}</p>
      <p>Comment count: {article.comment_count}</p>
      <p>Votes: {votesCount}</p>
      <button onClick={handleClick}>UPVOTE</button>
      <Comments article_id={article_id} />
    </div>
  );
}

export default SingleArticle;
