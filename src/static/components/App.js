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
      username: '',
    }

    this.getAllExpenses()
  }

  getAllExpenses() {
    axios.get('/expenses')
    .then((response) => {
      this.setState({ expenseList: response.data });
    }).catch(err => console.log('get expense error'));
  }

  logIn(username, password, e) {
    axios.get('/users/' + username)
    .then((response) => {
      if (response.data === false){
        console.log('user does not exist');
      } else if (response.data === password) {
        console.log('logged in');
        this.setState({ loggedIn: true, username: username });
      } else {
        console.log('Username and password do not match');
      }
    }).catch(err => console.log('get users error', err));
    e.preventDefault();
  }

  createUser(username, password, e) {
    axios.get('/users/' + username)
    .then((response) => {
      if (response.data === false){
        axios.post('/users', { username, password })
        .then(() => {
          this.setState({ loggedIn: true, username: username });
        })
      } else {
        console.log('Username is already taken');
      }
    }).catch(err => console.log('get users error', err));
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Login loggedIn={this.state.loggedIn} logIn={this.logIn} createUser={this.createUser} />
        <ExpenseEntry loggedIn={this.state.loggedIn} getAll={this.getAllExpenses} username={this.state.username} />
        <ExpenseList loggedIn={this.state.loggedIn} expenseList={this.state.expenseList} />
      </div>
    );
  }
}