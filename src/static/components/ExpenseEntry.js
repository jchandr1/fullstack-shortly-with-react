import React from 'react';

export default class ExpenseEntry extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleName = this.handleName.bind(this);
    this.handleCost = this.handleCost.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
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
    const expense = {name: this.state.name, cost: this.state.cost, currency: this.state.currency};
    axios.post('/expense', expense)
    event.preventDefault();
    this.setState({name: '', cost: '', currency: 'USD'});
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