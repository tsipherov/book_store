import React from "react";
import "./ShopHeader.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <NavLink to="/">
        <div className="logo text-dark">ReStore</div>
      </NavLink>
      <NavLink to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems ? `${numItems} items ($${total})` : `Cart is empty`}
        </div>
      </NavLink>
    </header>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return { numItems: cartItems.length, total: orderTotal };
};

export default connect(mapStateToProps)(ShopHeader);
