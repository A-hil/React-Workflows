import React from "react";

function Article({ title, content }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  );
}

export default Article;