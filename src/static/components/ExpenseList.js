import React from 'react';
import Expense from './Expense';
import axios from 'axios';

export default class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      expenseList: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ expenseList: nextProps.expenseList});
  }

  render() {
    return ((!this.state.loggedIn) ? null : 
      <table width="500" className="expense-list">
        <tbody>
          <tr>
            <th>Description</th>
            <th>Cost</th>
          </tr>
        </tbody>
        {this.state.expenseList.map(expense =>
          <Expense key={expense.id} item={expense} />
        )}
      </table>
    );
  }
}