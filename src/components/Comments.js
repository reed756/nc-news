import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment, getComments, postComment } from "../utils/api";
import { formatDate } from "../utils/utils";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const { loggedInUser, setloggedInUser } = useContext(UserContext);
  const [body, setBody] = useState("");

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id]);

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
      <form onSubmit={handleSubmit}>
        <label>Comment as {loggedInUser.username}</label>
        <textarea onChange={handleChange} value={body}></textarea>
        <button type="submit">COMMENT</button>
      </form>
      <p>List of comments:</p>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>
                {comment.author} on {formatDate(comment.created_at)}
              </p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              {loggedInUser.username === comment.author ? (
                <button
                  onClick={() => {
                    deleteComment(comment.comment_id);
                  }}
                >
                  DELETE
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
