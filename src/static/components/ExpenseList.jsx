import React from 'react';

export default class ExpenseList extends React.Component {
  render(props) {
    return (
      <div className="expense-list">
        expenseList.map(expense => {
          <Expense key={expense.id} item={expense}
        })
      </div>
    );
  }
}