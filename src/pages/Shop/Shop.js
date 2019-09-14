import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// ACTIONS
import { setCollections } from "../../redux/shop/shop.actions";

// COMPONENTS
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";

import { firestore, getCollections } from "../../firebase/firebase.utils";

export class Shop extends Component {
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collections = getCollections(snapshot);
      console.log(collections);
      this.props.setCollections(collections);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={match.path} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={Collection}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {
    setCollections
  }
)(Shop);
