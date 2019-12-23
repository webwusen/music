import React from 'react';
import ReactDOM from 'react-dom';
import './styles/var.less';
import './styles/index.less';
// import Layout from './layout/Layout';
import App from './app'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
