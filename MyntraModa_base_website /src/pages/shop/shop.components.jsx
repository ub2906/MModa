import React from "react";

import Shop_Data from "./shop.data.jsx";

import Pre_Collection from  "../../components/preview-collection/pre-collection.components";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            collections: Shop_Data
         
        }
    }
  
    render(){
        const {collections} = this.state;
        return<div className="ShopPage"> {
            collections.map(({id, ...otherCollectionProps}) =>(
                <Pre_Collection key={id}{...otherCollectionProps}/>
            ))
        }
        </div>
    }
}

export default ShopPage;