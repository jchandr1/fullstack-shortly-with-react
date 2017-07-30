import React from 'react';
import ExpenseEntry from './ExpenseEntry';
import ExpenseList from './ExpenseList';
import Login from './Login';

export default class App extends React.Component {
  constructor() {
    super();
    this.logIn = this.logIn.bind(this);
    this.state = {
      loggedIn: true,
    }
  }

  logIn() {
    
  }

  render() {
    return (
      <div>
        <Login loggedIn={this.state.loggedIn} />
        <ExpenseEntry loggedIn={this.state.loggedIn} />
        <ExpenseList loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}