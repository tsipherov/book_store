import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import WithBookstoreService from "../hoc/WithBookstoreService";
import HomePage from "../../pages/HomePage/HomePage";
import CartPage from "../../pages/CartPage/CartPage";
import ShopHeader from "../ShopHeader/ShopHeader";
const App = ({ bookStoreService }) => {
  console.log(bookStoreService.getBooks());
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
};

export default WithBookstoreService()(App);
