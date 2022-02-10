import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import { formatDate, formatText } from "../utils/utils";
import styles from "../styles/Articles.module.css";
import Error from "./Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";

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
      <h2 className={styles.articlesHeading}>
        {slug ? formatText(slug) : "All"} Articles
      </h2>
      <form className={styles.sortByForm}>
        <label className={styles.sortByLabel}>Sort By: </label>
        <select onChange={handleChange} className={styles.sortBySelect}>
          <option className={styles.sortByOption}>created_at</option>
          <option className={styles.sortByOption}>title</option>
          <option className={styles.sortByOption}>votes</option>
          <option className={styles.sortByOption}>author</option>
        </select>
      </form>
      <ul className={styles.articlesUnorderedList}>
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
              className={styles.articlesLink}
            >
              <li key={article.article_id} className={styles.articlesListItem}>
                <h2>{article.title}</h2>
                <p>
                  By {article.author} created on{" "}
                  {formatDate(article.created_at)}
                </p>
                <p>
                  <FontAwesomeIcon icon={faComment} /> {article.comment_count}{" "}
                  Comments{" "}
                </p>
                <p>
                  <FontAwesomeIcon icon={faThumbsUp} /> {article.votes} Votes
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Articles;
