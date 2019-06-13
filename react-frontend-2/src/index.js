// console.log('My Minimal React Webpack Babel Setup');
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
// const title = 'sdfasdfcvcZXCZXC this xczvzxcvxzcvzxcvzxcv load asdfasdfasdfasdf';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();