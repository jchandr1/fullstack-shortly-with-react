import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import ExpenseList from './static/components/ExpenseList'
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(ExpenseList),
    document.getElementById('mount')
  );
});