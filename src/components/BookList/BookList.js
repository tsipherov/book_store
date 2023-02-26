import React, { Component } from "react";
import { connect } from "react-redux";

import compose from "../../utils/compose";
import WithBookstoreService from "../hoc/WithBookstoreService";
import {
  booksLoaded,
  booksRequested,
  booksError,
} from "../../actions/bookStoreActions";

import BookListItem from "../BookListItem/BookListItem";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

import "./BookList.css";

class BookList extends Component {
  componentDidMount() {
    const { bookStoreService, booksLoaded, booksRequested, booksError } =
      this.props;

    booksRequested();
    bookStoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }

  render() {
    const { books, isLoading, error } = this.props;

    console.log("error >>> ", error);

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, isLoading, error }) => {
  return { books, isLoading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
