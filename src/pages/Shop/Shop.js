import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// ACTIONS
import { setCollections } from "../../redux/shop/shop.actions";

// COMPONENTS
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";

// HOC
import WithSpinner from "../../hoc/WithSpinner/WithSpinner";

import { firestore, getCollections } from "../../firebase/firebase.utils";
import { cpus } from "os";


export class Shop extends Component {

  state = {
    loading: true
  }



  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collections = getCollections(snapshot);
      console.log(collections);
      this.props.setCollections(collections);
      this.setState(() => {
        return {
          loading: false
        }
      })
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
    const CollectionWithSpinner = WithSpinner(Collection);



    return (
      <div className="shop-page">
        <Route exact path={match.path} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />}
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
