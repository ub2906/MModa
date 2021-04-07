import React from "react";

import MenuItem from "../menu-item/menu-item.components";

import "./menu.style.scss"

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                    title: 'hats',
                    imageUrl: 'https://image.shutterstock.com/image-photo/straw-hats-sale-men-light-600w-1408747529.jpg',
                    id: 1,
                    linkUrl: "hats"
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: "jackets"
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: "sneakers"
                },
                {
                    title: 'H&M',
                    imageUrl: 'https://planetfashion.imgix.net/resources/img/planet_fashion/PF_D_S2_aboutUs.jpg?auto=format',
                    size: 'large',
                    id: 4,
                    linkUrl: ""
                },
                {
                    title: 'HRX',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDiwgXYpqt-2rYB7aRCkLpPHQj7v4e068J_uRDjdXVapZSbqoG&usqp=CAU',
                    size: 'large',
                    id: 5,
                    linkUrl: ""
                }
            ]
        }
    }

    render() {
        return ( <
            div className = "menu" > {
                this.state.sections.map(({ id, ...otherSectionProps }) => ( <
                    MenuItem key = { id } {...otherSectionProps }
                    />
                ))
            } <
            /div> 
        )
    }


}

export default Menu;