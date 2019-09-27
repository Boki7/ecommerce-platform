import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// ACTIONS
import { fetchCollections } from "../../redux/shop/shop.actions";

// COMPONENTS
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";

// HOC
import WithSpinner from "../../hoc/WithSpinner/WithSpinner";

export class Shop extends Component {
  componentDidMount() {
    this.props.fetchCollections()
  }

  render() {
    const { match } = this.props;

    const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
    const CollectionWithSpinner = WithSpinner(Collection);

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={this.props.isFetching} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionWithSpinner isLoading={this.props.isFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.shop.isFetching
  }
}

export default connect(
  mapStateToProps,
  {
    fetchCollections
  }
)(Shop);
