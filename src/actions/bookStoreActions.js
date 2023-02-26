const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const fetchBooks = (dispatch, bookStoreService) => () => {
  dispatch(booksRequested());
  bookStoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
  };
};
export const bookRemoveFromCart = (bookId) => {
  return {
    type: "BOOK_REMOVE_FROM_CART",
    payload: bookId,
  };
};

export { fetchBooks };
