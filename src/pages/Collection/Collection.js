import React from "react";
import { connect } from "react-redux";

// STYLE
import "./Collection.scss";

// COMPONENTS
import CollectionItem from "../../components/CollectionItem/CollectionItem";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  const renderCollectionItems = () => {
    return items.map(item => {
      return <CollectionItem item={item} key={item.id} />;
    });
  };
  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">{renderCollectionItems()}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: state.shop.collections[ownProps.match.params.collectionId]
  };
};

export default connect(mapStateToProps)(Collection);
