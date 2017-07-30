import React from 'react';
import ReactDOM from 'react-dom';
import App from './static/components/App'
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('mount')
  );
});