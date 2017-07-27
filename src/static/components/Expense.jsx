import React from 'react';

export default class Expense extends React.Component {
  render(prop) {
    return (
      <div className="expense">
        <div className="expense-name">{prop.name}</div>
        <div className="expense-amt">{prop.dollarVal}</div>
      </div>
    );
  }
}