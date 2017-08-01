import React from 'react';

export default class Expense extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      expense: prop.item,
    }
  }

  render(prop) {
    return (
      <tbody>
        <tr className="expense">
          <th className="expense-name">{this.state.expense.name}</th>
          <th className="expense-amt">{this.state.expense.USDVal}</th>
        </tr>
      </tbody>
    );
  }
}