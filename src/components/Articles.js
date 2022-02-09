import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import { formatDate } from "../utils/utils";
import Error from "./Error";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSort_By] = useState("created_at");
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    getArticles(slug, sort_by)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ err });
      });
  }, [slug, sort_by]);

  function handleChange(event) {
    setSort_By(event.target.value);
  }

  console.log(error);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    return (
      <Error
        status={error.err.response.status}
        message={error.err.response.data.msg}
      />
    );
  }
  return (
    <>
      <h2>{slug ? slug : "All"} Articles</h2>
      <form>
        <label>Sort by:</label>
        <select onChange={handleChange}>
          <option>created_at</option>
          <option>title</option>
          <option>votes</option>
          <option>author</option>
        </select>
      </form>
      <ul>
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <li key={article.article_id}>
                <h2>{article.title}</h2>
                <p>
                  By {article.author} created on{" "}
                  {formatDate(article.created_at)}
                </p>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Articles;
