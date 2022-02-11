import React, { useState } from "react";
import styles from "../styles/Vote.module.css";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addVoteComment } from "../utils/api";

function Vote({ votes, comment_id }) {
  const [votesCount, setVotesCount] = useState(votes);
  function handleClick(event) {
    event.target.setAttribute("disabled", true);
    setVotesCount((currCount) => currCount + 1);
    addVoteComment(comment_id);
  }
  return (
    <button onClick={handleClick} className={styles.button}>
      UPVOTE <FontAwesomeIcon icon={faThumbsUp} /> {votesCount}
    </button>
  );
}

export default Vote;
