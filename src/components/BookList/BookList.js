import React, { Component } from "react";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";

import WithBookstoreService from "../hoc/WithBookstoreService";
import {
  booksLoaded,
  // booksRequested,
  // booksError,
} from "../../actions/bookStoreActions";
import compose from "../../utils/compose";

// import Spinner from "../spinner";
// import ErrorIndicator from "../error-indicator";

import "./BookList.css";

class BookList extends Component {
  componentDidMount() {
    const {
      bookStoreService,
      booksLoaded,
      //     booksRequested,
      //     booksError
    } = this.props;

    //   booksRequested();
    bookStoreService.getBooks().then((data) => booksLoaded(data));
    //     .catch((err) => booksError(err));
  }

  render() {
    // const { books, loading, error } = this.props;
    const { books } = this.props;

    // if (loading) {
    //   return <Spinner />;
    // }

    // if (error) {
    //   return <ErrorIndicator />;
    // }

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

// const mapStateToProps = ({ books, loading, error }) => {
//   return { books, loading, error };
// };
const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded,
  //   booksRequested,
  //   booksError
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
