// import React, { Fragment } from "react";
import "./BookListItem.css";

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <>
      <span>{title} _ </span>
      <span>{author}</span>
    </>
  );
};

export default BookListItem;
