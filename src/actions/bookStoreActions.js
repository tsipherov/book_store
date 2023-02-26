const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: "BOOKS_ERROR",
    payload: error,
  };
};

const booksRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};

export { booksLoaded, booksRequested, booksError };
