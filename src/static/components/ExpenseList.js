import React from 'react';
import data from './SampleExpenses';
import Expense from './Expense';
import axios from 'axios';

export default class ExpenseList extends React.Component {
  constructor() {
    super();
    this.handleName = this.handleName.bind(this);
    this.handleCost = this.handleCost.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      expenseList: [],
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
      interval: setInterval(this.getAllExpenses.bind(this), 500),
    }
  }

  getAllExpenses() {
    axios.get('/expense')
    .then((response) => {
      this.setState({expenseList: response.data});
    }).catch(err => clearInterval(this.state.interval));
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
    axios.post('/expense', expense)
    event.preventDefault();
    this.setState({name: '', cost: '', currency: 'USD'});
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