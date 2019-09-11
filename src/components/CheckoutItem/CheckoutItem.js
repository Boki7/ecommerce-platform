import React from "react";
import { connect } from "react-redux";

// ACTIONS
import {
  removeCartItem,
  addCartItem,
  decreaseCartItem
} from "../../redux/cart/cart.actions";

// STYLE
import "./CheckoutItem.scss";

const CheckoutItem = ({
  item,
  removeCartItem,
  addCartItem,
  decreaseCartItem
}) => {
  console.log(item);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={item.imageUrl} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseCartItem(item)}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addCartItem(item);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">${item.price}</span>
      <div className="remove-button" onClick={() => removeCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(
  null,
  {
    removeCartItem,
    addCartItem,
    decreaseCartItem
  }
)(CheckoutItem);
