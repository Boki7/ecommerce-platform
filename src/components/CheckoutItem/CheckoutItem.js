import React from "react";
import { connect } from "react-redux";

// ACTIONS
import {
  removeCartItem,
  addCartItem,
  decreaseCartItem
} from "../../redux/cart/cart.actions";

// STYLED COMPONENTS
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  NameContainer,
  QuantityContainer,
  PriceContainer,
  ArrowContainer,
  ValueContainer,
  RemoveButtonContainer
} from "./CheckoutItem.style";

const CheckoutItem = ({
  item,
  removeCartItem,
  addCartItem,
  decreaseCartItem
}) => {
  console.log(item);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image alt="item" src={item.imageUrl} />
      </ImageContainer>
      <NameContainer>{item.name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => decreaseCartItem(item)}>
          &#10094;
        </ArrowContainer>
        <ValueContainer>{item.quantity}</ValueContainer>
        <ArrowContainer
          onClick={() => {
            addCartItem(item);
          }}
        >
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <PriceContainer>${item.price}</PriceContainer>
      <RemoveButtonContainer onClick={() => removeCartItem(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(
  null,
  {
    removeCartItem,
    addCartItem,
    decreaseCartItem
  }
)(CheckoutItem);
