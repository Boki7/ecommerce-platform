import * as cartType from "./cart.types";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartType.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartType.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}