import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/mmlogo.svg";

import "./header.styles.scss";


const Header = () => ( 
    <div className = "header" >
        <Link to = "/">
    <Logo className = "logo" />
    </Link>    
    <div className = "options" >
        <Link className = "option" to = "/shop" > SHOP </Link>     
        <a href = "https://miro.com/app/dashboard/" > TAGBOARD </a>  &emsp;   
        <a href = "https://virtualmall.netlify.app/" > VIRTUAL MODA </a> &emsp;  
        <a href = "https://moda-p.herokuapp.com/#narrow-visitor-check" > MODA PARTY </a>     
        <Link className = "option" to = "/signIn" > SIGN IN </Link>   
    </div> 
    </div>
)

export default Header;
