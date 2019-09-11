import React from "react";
import { connect } from "react-redux";

// REDUX SELECTORS
import { selectTotalCart, selectCartItems } from '../../redux/cart/cart.selectors';

// STYLE
import "./Checkout.scss";


//COMPONENTS
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = ({ total, cartItems }) => {

    const renderCheckoutItems = () => {
        return cartItems.map(cartItem => {
            return <CheckoutItem item={cartItem} key={cartItem.id} />
        })
    }


  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {renderCheckoutItems()}
      <div className="total">{total}$</div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        total: selectTotalCart(state),
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(Checkout);
