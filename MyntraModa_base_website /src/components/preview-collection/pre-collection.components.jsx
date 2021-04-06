import React from "react";

import CollectionItem from "../collection-item/collection-item.components";

import "./pre-collection.scss";

const Pre_Collection =({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item,idx) => idx <4)
                .map(({id, ...otherItemProps}) =>(
                  <CollectionItem key = {id}{...otherItemProps} /> 
                ))
            }
        </div>
    </div>
)

export default Pre_Collection;