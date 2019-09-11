import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";

// STYLE
import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";

const CollectionItem = ({ item, addCartItem }) => {
  const styles = {
    backgroundImage: `url(${item.imageUrl})`
  };

  return (
    <div className="collection-item" >
      <div className="image" style={styles}></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>ADD TO CART</CustomButton>
    </div>
  );
};

export default connect(
  null,
  {
    addCartItem
  }
)(CollectionItem);
