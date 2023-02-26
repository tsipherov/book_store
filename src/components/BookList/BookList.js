import React, { Component } from "react";
import { connect } from "react-redux";

import compose from "../../utils/compose";
import WithBookstoreService from "../hoc/WithBookstoreService";
import { fetchBooks, bookAddedToCart } from "../../actions/bookStoreActions";

import BookListItem from "../BookListItem/BookListItem";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

import "./BookList.css";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} onAddedToCart={onAddedToCart} />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, isLoading, error, onAddedToCart } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ books, isLoading, error }) => {
  return { books, isLoading, error };
};

const mapDispatchToProps = (dispatch, { bookStoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookStoreService),
    onAddedToCart: (id) => {
      dispatch(bookAddedToCart(id));
    },
  };
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
