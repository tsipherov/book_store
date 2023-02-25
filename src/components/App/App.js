import React from "react";
import "./app.css";
import WithBookstoreService from "../hoc/WithBookstoreService";

const App = ({ bookStoreService }) => {
  console.log(bookStoreService.getBooks());

  return <div>App</div>;
};

export default WithBookstoreService()(App);
