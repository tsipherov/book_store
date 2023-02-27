import React from "react";
import { connect } from "react-redux";
import {
  bookAddedToCart,
  bookDecreaseInCart,
  bookRemoveFromCart,
} from "../../actions/bookStoreActions";
// import compose from "../../utils/compose";
// import WithBookstoreService from "../hoc/WithBookstoreService";
import "./ShoppingCartTable.css";

const ShoppingCartTable = ({
  items,
  orderTotal,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      {items.length ? <div className="total">Total: ${orderTotal}</div> : null}
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    orderTotal,
  };
};

// первый способ передачи обработчиков
const mapDispatchToProps = {
  onDelete: bookRemoveFromCart,
  onIncrease: bookAddedToCart,
  onDecrease: bookDecreaseInCart,
};

// Второй способ передачи обработчиков

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDelete: (id) => {
//       dispatch(bookRemoveFromCart(id));
//     },
//     onIncrease: (id) => {
//       dispatch(bookAddedToCart(id));
//     },
//     onDecrease: (id) => {
//       dispatch(bookDecreaseInCart(id));
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
