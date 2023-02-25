import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import "./index.css";
import bookStore from "./store";
import { BookstoreServiceProvider } from "./components/BookstoreServiceContext/BookstoreServiceContext";
import BookStoreService from "./services/BookstoreService";

const bookStoreService = new BookStoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={bookStore}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookStoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);
