import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import {
  deleteComment,
  getComments,
  postComment,
  addVoteComment,
} from "../utils/api";
import { formatDate } from "../utils/utils";
import styles from "../styles/Comments.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const { loggedInUser, setloggedInUser } = useContext(UserContext);
  const [body, setBody] = useState("");
  // const [votesCount, setVotesCount] = useState(0);

  useEffect(() => {
    let isApiSubscribed = true;
    getComments(article_id).then(({ comments }) => {
      if (isApiSubscribed) {
        setComments(comments);
      }
    });
    return () => {
      isApiSubscribed = false;
    };
  }, [article_id, comments]);

  function handleChange(event) {
    setBody(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    postComment(article_id, loggedInUser.username, body);
    setBody("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Comment as {loggedInUser.username}
        </label>
        <textarea
          onChange={handleChange}
          value={body}
          className={styles.textarea}
          placeholder="What are your thoughts?"
          required
        ></textarea>
        <button className={styles.button} type="submit">
          COMMENT
        </button>
      </form>
      <ul className={styles.unorderedList}>
        {comments.map((comment) => {
          return (
            <li className={styles.listItem} key={comment.comment_id}>
              <p className={styles.paragraphAuthor}>
                {comment.author} -{" "}
                {moment(formatDate(comment.created_at)).fromNow()}
              </p>
              <p className={styles.paragraph}>{comment.body}</p>
              <button
                icon="fa-solid fa-thumbs-up"
                className={styles.button}
                onClick={() => {
                  // setVotesCount((currCount) => currCount + 1);
                  addVoteComment(comment.comment_id);
                }}
              >
                UPVOTE <FontAwesomeIcon icon={faThumbsUp} /> {comment.votes}
              </button>
              {loggedInUser.username === comment.author ? (
                <button
                  className={styles.button}
                  onClick={() => {
                    deleteComment(comment.comment_id);
                  }}
                >
                  DELETE <FontAwesomeIcon icon={faTrashCan} />
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Comments;
