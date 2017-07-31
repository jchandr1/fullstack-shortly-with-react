import React from 'react';
import ExpenseEntry from './ExpenseEntry';
import ExpenseList from './ExpenseList';
import Login from './Login';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    this.getAllExpenses = this.getAllExpenses.bind(this);
    this.createUser = this.createUser.bind(this);
    this.logIn = this.logIn.bind(this);

    this.state = {
      expenseList: [],
      loggedIn: false,
    }

    this.getAllExpenses()
  }

  getAllExpenses() {
    axios.get('/expenses')
    .then((response) => {
      this.setState({ expenseList: response.data });
    }).catch(err => console.log('get expense error'));
  }

  logIn(username, password) {
    console.log('username = ', username);
    axios.get('/users/' + username)
    .then((response) => {
      console.log(response.data);
      if (response.data[0] === password) {
        console.log('logged in');
        this.setState({ loggedIn: true });
      } else {
        console.log('Username and password do not match');
        this.setState({ loggedIn: false });
      }
    }).catch(err => console.log('get users error', err));
  }

  createUser(username, password) {
    console.log('creating user');
  }

  render() {
    return (
      <div>
        <Login loggedIn={this.state.loggedIn} logIn={this.logIn} createUser={this.createUser} />
        <ExpenseEntry loggedIn={this.state.loggedIn} getAll={this.getAllExpenses} />
        <ExpenseList loggedIn={this.state.loggedIn} expenseList={this.state.expenseList} />
      </div>
    );
  }
}