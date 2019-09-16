import React from "react";
import { connect } from "react-redux";

// STYLE
import "./CollectionOverview.scss";

// COMPONENTS
import CollectionPreview from "../CollectionPreview/CollectionPreview";

const CollectionOverview = ({ collections }) => {
  const handleMapCollections = () => {
    return collections.map(({ id, title, items }) => {
      return <CollectionPreview key={id} title={title} items={items} />;
    });
  };

  return <div className="collection-overview">{handleMapCollections()}</div>;
};

const mapStateToProps = state => {
  return {
    collections: state.shop.collections ? Object.values(state.shop.collections) : []
  };
};

export default connect(mapStateToProps)(CollectionOverview);
