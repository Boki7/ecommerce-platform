import React from "react";
import { connect } from "react-redux";

// STYLE
import "./CartDropdown.scss";

// COMPONENTS
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ cartItems }) => {
  const renderCartItems = () => {
    return cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} item={cartItem} />;
    });
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderCartItems()}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps)(CartDropdown);
