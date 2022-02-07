import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getSingleArticle(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div>
      <h2>{article.title}</h2>
      <h3>
        Created by {article.author} on {article.created_at}
      </h3>
      <p>{article.body}</p>
      <p>Comment count: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
    </div>
  );
}

export default SingleArticle;
