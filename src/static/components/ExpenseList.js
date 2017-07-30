import React from 'react';
import Expense from './Expense';
import axios from 'axios';

export default class ExpenseList extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      loggedIn: prop.loggedIn,
      expenseList: [],
      interval: setInterval(this.getAllExpenses.bind(this), 500),
    }
  }

  getAllExpenses() {
    axios.get('/expense')
    .then((response) => {
      this.setState({expenseList: response.data});
    }).catch(err => clearInterval(this.state.interval));
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