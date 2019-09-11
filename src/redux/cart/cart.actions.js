import * as cartType from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: cartType.TOOGLE_CART_HIDDEN
  };
};

export const addCartItem = item => {
  return {
    type: cartType.ADD_CART_ITEM,
    payload: item
  };
};

export const removeCartItem = item => {
  return {
    type: cartType.REMOVE_CART_ITEM,
    payload: item
  }
}
