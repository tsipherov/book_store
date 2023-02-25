import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import WithBookstoreService from "../hoc/WithBookstoreService";
import HomePage from "../../pages/HomePage/HomePage";
import CartPage from "../../pages/CartPage/CartPage";
const App = ({ bookStoreService }) => {
  console.log(bookStoreService.getBooks());
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default WithBookstoreService()(App);
