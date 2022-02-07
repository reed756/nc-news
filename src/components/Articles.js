import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    getArticles(slug).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [slug]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <ul>
      {articles.map((article) => {
        return (
          <Link to={`articles/${article.article_id}`} key={article.article_id}>
            <li key={article.article_id}>
              <h2>{article.title}</h2>
              <p>
                By {article.author} created at {article.created_at}
              </p>
              <p>Comments: {article.comment_count}</p>
              <p>Votes: {article.votes}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Articles;
