import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
require('dotenv').config();

ReactDOM.render(
  <BrowserRouter>
      <App /> 
  </BrowserRouter>
  , document.getElementById('root')
);
registerServiceWorker();
