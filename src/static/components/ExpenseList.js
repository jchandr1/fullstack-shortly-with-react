import React from 'react';
import data from './SampleExpenses';
import Expense from './Expense';
import axios from 'axios';

export default class ExpenseList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      expenseList: data,
      currency: 'USD',
      name: '',
      cost: '',
      options: [
        "AUD",
        "BGN",
        "BRL",
        "CAD",
        "CHF",
        "CNY",
        "CZK",
        "DKK",
        "EUR",
        "GBP",
        "HKD",
        "HRK",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "JPY",
        "KRW",
        "MXN",
        "MYR",
        "NOK",
        "NZD",
        "PHP",
        "PLN",
        "RON",
        "RUB",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "ZAR",
      ],
    }
    this.handleName = this.handleName.bind(this);
    this.handleCost = this.handleCost.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value})
  }

  handleCost(event) {
    this.setState({cost: event.target.value})
  }

  handleCurrency(event) {
    this.setState({currency: event.target.value})
  }

  handleSubmit(event) {
    const expense = {name: this.state.name, cost: this.state.cost, currency: this.state.currency};
    axios.post('/expense', expense);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Expense info:</legend>
            Expense Name:<br />
            <input type="text" value={this.state.name} onChange={this.handleName} /><br />
            Total Cost:<br />
            <input type="text" value={this.state.cost} onChange={this.handleCost} /><br />
            Currency Type<br />
            <select onChange={this.handleCurrency} value={this.state.currency}>
              <option value="USD" key="USD">USD</option>
              {this.state.options.map(option =>
                <option value={option} key={option}>{option}</option>
              )}
            </select><br /><br />
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
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
      </div>
    );
  }
}


// 1.4732
// 1.9558
// 3.7015
// 1.4712
// 1.1357
// 7.9087
// 26.048
// 7.4364
// 0.89568
// 9.1613
// 7.412
// 304.93
// 15639
// 4.1765
// 75.256
// 130.37
// 1317.6
// 20.809
// 5.0229
// 9.3195
// 1.5694
// 59.207
// 4.2493
// 4.558
// 69.832
// 9.5355
// 1.5947
// 39.146
// 4.1462
// 1.1729
// 15.281