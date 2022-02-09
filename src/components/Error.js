import React from "react";

function Error({ status, message }) {
  return (
    <h1>
      {status} - {message}
    </h1>
  );
}

export default Error;
