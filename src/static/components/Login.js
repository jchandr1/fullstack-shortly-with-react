import React from 'react';

export default class Login extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleUsername = this.handleUserame.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      loggedIn: prop.loggedIn,
      username: '',
      password: '',
    }
  }

  handleUserame(event) {
    this.setState({username: event.target.value})
  }

  handlePassword(event) {
    this.setState({password: event.target.value})
  }

  render() {
    return (this.state.loggedIn) ? null : (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Login info:</legend>
          Username:<br />
          <input type="text" value={this.state.username} onChange={this.handleUsername} /><br />
          Password:<br />
          <input type="text" value={this.state.password} onChange={this.handlePassword} /><br /><br />
          <input type="submit" value="Login" />
          <input type="submit" value="Create new user" />
        </fieldset>
      </form>
    );
  }
}