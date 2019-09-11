import React from "react";
import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";


// REDUX SELECTORS
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// ACTIONS
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// STYLE
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <BagIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
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
