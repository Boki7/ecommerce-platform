import React from 'react';
import { connect } from 'react-redux';

const COLLECTIONS_DATA = {
    'hats': 1,
    'sneakers': 2,
    'jackets': 3,
    'womens': 4,
    'men': 5

}

const Collection = ({collection}) => {
    console.log(collection)
    return (
        <div>
            Collection Page
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {

    return {
        collection: state.shop.collections.find(collection => {
            return collection.id === COLLECTIONS_DATA[ownProps.match.params.collectionId]
        })
    }
    // collection: state.collections
}

export default connect(mapStateToProps)(Collection);