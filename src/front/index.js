import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routers/AppRouters';

// import App from './components/App';

import './scss/reset.scss';
import './scss/base.scss';



ReactDOM.render(<AppRoutes />, document.getElementById('app'));