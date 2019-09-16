import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// ACTIONS
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// REDUX SELECTORS
import { selectCartItems } from "../../redux/cart/cart.selectors";

// STYLED COMPONENTS
import {
  CartdropdownContainer,
  CartItemsContainer,
  EmptyMessage
} from './CartDropdown.style';

// COMPONENTS
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const renderCartItems = () => {
    if (!cartItems.length) {
      return <EmptyMessage>Your cart is empty</EmptyMessage>;
    }

    return cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} item={cartItem} />;
    });
  };

  return (
    <CartdropdownContainer>
      <CartItemsContainer>{renderCartItems()}</CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartdropdownContainer>
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
