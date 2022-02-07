import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);
  console.log(articles);

  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <h2>{article.title}</h2>
            <p>
              By {article.author} created at {article.created_at}
            </p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Articles;
