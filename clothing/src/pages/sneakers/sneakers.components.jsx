import React from "react";

import Sneaker_Data from "./sneakers.data.jsx";

import Pre_Collection from "../../components/preview-collection/pre-collection.components";

class SneakerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Sneaker_Data

        }
    }

    render() {
        const { collections } = this.state;
        return <div className = "SneakerPage" > {
                collections.map(({ id, ...otherCollectionProps }) => ( <
                    Pre_Collection key = { id } {...otherCollectionProps }
                    />
                ))
            } <
            /div>
    }
}

export default SneakerPage;