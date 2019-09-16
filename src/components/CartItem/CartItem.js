import React from "react";

// STYLED COMPONENTS
import {
  CartItemContainer,
  Image,
  ItemDetailsContainer,
  NameContainer,
  PriceContainer
} from "./CartItem.style";

const CartItem = ({ item }) => {
  return (
    <CartItemContainer>
      <Image src={item.imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameContainer>{item.name}</NameContainer>
        <PriceContainer>
          {item.quantity} x {item.price}$
        </PriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
