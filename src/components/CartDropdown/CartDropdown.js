import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// ACTIONS
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// REDUX SELECTORS
import { selectCartItems } from "../../redux/cart/cart.selectors";

// STYLE
import "./CartDropdown.scss";

// COMPONENTS
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const renderCartItems = () => {
    if (!cartItems.length) {
      return <span className="empty-message">Your cart is empty</span>;
    }

    return cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} item={cartItem} />;
    });
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderCartItems()}</div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      toggleCartHidden
    }
  )(CartDropdown)
);
