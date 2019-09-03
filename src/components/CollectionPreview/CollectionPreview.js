import React from 'react';

// STYLE
import './CollectionPreview.scss';

// COMPONENTS
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({title, items}) => {

    const renderItems = () => {
        return items.filter((item, id) => {
            return id < 4;
        }).map(({name, id, imageUrl, price}) => {
            return <CollectionItem key={id} name={name} id={id} imageUrl={imageUrl} price={price} />
        })
    }


    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">{renderItems()}</div>
        </div>
    );
};

export default CollectionPreview;