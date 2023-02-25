import React from "react";
import { BookstoreServiceConsumer } from "../BookstoreServiceContext/BookstoreServiceContext";

const WithBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookStoreService) => {
          return <Wrapped {...props} bookStoreService={bookStoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default WithBookstoreService;
