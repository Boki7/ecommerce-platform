export const addCartItemUtil = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => {
    return cartItem.id === itemToAdd.id;
  });

  if (existingItem) {
    return cartItems.map(cartItem => {
      if (cartItem.id === itemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseCartItemUtil = (cartItems, itemToDecrease) => {
  const existingItem = cartItems.find(cartItem => {
    return cartItem.id === itemToDecrease.id;
  });

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => {
      return cartItem.id !== itemToDecrease.id;
    });
  } else {
    return cartItems.map(cartItem => {
      if (cartItem.id === itemToDecrease.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      } else {
        return cartItem;
      }
    });
  }
};
