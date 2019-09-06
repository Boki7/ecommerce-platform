import React from "react";
import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

// ACTIONS
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// STYLE
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <BagIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(
  null,
  {
    toggleCartHidden
  }
)(CartIcon);
