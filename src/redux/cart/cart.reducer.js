import * as cartType from "./cart.types";
import { addCartItemUtil } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartType.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartItemUtil(state.cartItems, action.payload)
      };
    case cartType.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => {
          return cartItem !== action.payload;
        })
      };
    default:
      return state;
  }
};
