import React, { Component } from 'react';

// SHOP DATA
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Shop extends Component {

    state = {
        collections: SHOP_DATA
    }


    handleMapCollections(){
        return this.state.collections.map(({id, title, items}) => {
            return <CollectionPreview key={id} title={title} items={items} />
        })
    }


    render() {
        return (
            <div>
                {this.handleMapCollections()}
            </div>
        );
    }
}

export default Shop;