import React from "react";
import styles from "../styles/ArticlesForm.module.css";
import { formatSortBy } from "../utils/utils";

function ArticlesForm({ setOrder, setSort_By }) {
  function handleChange(event) {
    if (event.target.value === "ASC" || event.target.value === "DESC") {
      setOrder(event.target.value);
    } else {
      setSort_By(formatSortBy(event.target.value));
    }
  }
  return (
    <form className={styles.sortByForm}>
      <label className={styles.sortByLabel}>Sort By: </label>
      <select onChange={handleChange} className={styles.sortBySelect}>
        <option className={styles.sortByOption}>Created At</option>
        <option className={styles.sortByOption}>Title</option>
        <option className={styles.sortByOption}>Votes</option>
        <option className={styles.sortByOption}>Author</option>
      </select>
      <label className={styles.sortByLabel}>Order: </label>
      <select onChange={handleChange} className={styles.sortBySelect}>
        <option className={styles.sortByOption}>DESC</option>
        <option className={styles.sortByOption}>ASC</option>
      </select>
    </form>
  );
}

export default ArticlesForm;
