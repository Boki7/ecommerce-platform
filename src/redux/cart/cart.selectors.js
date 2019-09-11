import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(selectCart);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  cartItems =>
    cartItems.reduce((accValue, cartItem) => {
      return accValue + cartItem.quantity;
    }, 0)
);

export const selectTotalCart = createSelector(
  selectCartItems,
  cartItems =>
    cartItems.reduce((accValue, cartItem) => {
      return accValue + cartItem.quantity * cartItem.price;
    }, 0)
);
