import React from 'react';
import axios from 'axios';

export default class ExpenseEntry extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleName = this.handleName.bind(this);
    this.handleCost = this.handleCost.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      getAll: prop.getAll,
      loggedIn: prop.loggedIn,
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
    }
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
    axios.get('http://api.fixer.io/latest?symbols=USD,' + this.state.currency)
    .then(response => {
      let USDVal = this.state.cost * response.data.rates.USD / (response.data.rates[this.state.currency] || 1);
      axios.post('/expense', {name: this.state.name, cost: this.state.cost, currency: this.state.currency, USDVal: USDVal})
      .then(() => {
        this.setState({ name: '', cost: '', currency: 'USD' });
        this.state.getAll();
      })
      .catch((err) => console.log('server post error', err));
    })
    .catch(err => console.log('api get error'));
    event.preventDefault();
  }

  render() {
    return ((!this.state.loggedIn) ? null : 
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
    );
  }
}