import React from 'react';
import ExpenseEntry from './ExpenseEntry';
import ExpenseList from './ExpenseList';
import Login from './Login';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    this.getAllExpenses = this.getAllExpenses.bind(this);
    this.logIn = this.logIn.bind(this);
    this.state = {
      expenseList: [],
      loggedIn: true,
    }
    this.getAllExpenses()
  }

  getAllExpenses() {
    axios.get('/expense')
    .then((response) => {
      this.setState({ expenseList: response.data });
    }).catch(err => console.log('get expense error\n', err));
  }

  checkUser(username) {
    
  }

  logIn() {
    
  }

  render() {
    return (
      <div>
        <Login loggedIn={this.state.loggedIn} />
        <ExpenseEntry loggedIn={this.state.loggedIn} getAll={this.getAllExpenses} />
        <ExpenseList loggedIn={this.state.loggedIn} expenseList={this.state.expenseList} />
      </div>
    );
  }
}