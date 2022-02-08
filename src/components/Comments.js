import React, { useEffect, useState } from "react";
import { getComments } from "../utils/api";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <p>List of comments:</p>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>
                {comment.author} at {comment.created_at}
              </p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Comments;
