import React from "react";

import { connect } from "react-redux";


// REDUX SELECTORS
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// ACTIONS
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// STYLED COMPONENTS
import {
  CartIconContainer,
  BagIconContainer,
  ItemCountContainer
} from './CartIcon.style';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <BagIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  }
}

export default connect(
  mapStateToProps,
  {
    toggleCartHidden
  }
)(CartIcon);
