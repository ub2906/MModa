import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRoutes} from "react-router-dom";


import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

