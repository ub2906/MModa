import React from "react";

import Hat_Data from "./jackets.data.jsx";

import Pre_Collection from "../../components/preview-collection/pre-collection.components";

class JacketPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Hat_Data

        }
    }

    render() {
        const { collections } = this.state;
        return <div className = "JacketPage" > {
            collections.map(({ id, ...otherCollectionProps }) => ( <
                Pre_Collection key = { id } {...otherCollectionProps }
                />
            ))
        } < /div>
    }
}

export default JacketPage;