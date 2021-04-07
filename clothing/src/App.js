import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components.jsx";
import TagPage from "./pages/tagboard/tag.components.jsx";
import HatPage from "./pages/hats/hats.components.jsx";
import JacketPage from "./pages/jackets/jackets.components.jsx";
import SneakerPage from "./pages/sneakers/sneakers.components.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in/sign-in.component.jsx";


function App() {
    return ( <
        div >
        <
        Header / >
        <
        switch >
        <
        Route exact path = "/"
        component = { Homepage }
        /> <
        Route path = "/shop"
        component = { ShopPage }
        /> <
        Route path = "/signIn"
        component = { SignInAndSignUpPage }
        /> <
        Route path = "/hats"
        component = { HatPage }
        /> <
        Route path = "/tagboard"
        component = { TagPage }
        /> <
        Route path = "/jackets"
        component = { JacketPage }
        /> <
        Route path = "/sneakers"
        component = { SneakerPage }
        />

        <
        /switch>  <
        /div>
    );
}

export default App;