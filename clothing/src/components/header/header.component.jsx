import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/mmlogo.svg";

import "./header.styles.scss";


const Header = () => ( <
    div className = "header" >
    <
    Link to = "/" >
    <
    Logo className = "logo" / >
    <
    /Link>   <
    div className = "options" >
    <
    Link className = "option"
    to = "/shop" > SHOP < /Link>   <
    Link className = "option"
    to = "/tagboard" > TAGBOARD < /Link>   <
    a href = "https://virtualmall.netlify.app/" > VIRTUAL MODA < /a>   <
    Link className = "option"
    to = "/signIn" > SIGN IN FOR MODA PARTY < /Link> <
    /div>  <
    /div>
)

export default Header;