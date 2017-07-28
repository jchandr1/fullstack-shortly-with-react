import React from 'react';
import data from './SampleExpenses';
import Expense from './Expense';


export default class ExpenseList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      expenseList: data,
    }
  }

  render() {
    return (
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
