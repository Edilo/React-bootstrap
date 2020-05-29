import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

