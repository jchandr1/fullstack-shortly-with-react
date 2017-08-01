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
      logIn: prop.logIn,
      createUser: prop.createUser
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loggedIn: nextProps.loggedIn });
  }

  handleUserame(event) {
    this.setState({username: event.target.value})
  }

  handlePassword(event) {
    this.setState({password: event.target.value})
  }

  render() {
    return (this.state.loggedIn) ? null : (
      <form>
        <fieldset>
          <legend>Login info:</legend>
          Username:<br />
          <input type="text" value={this.state.username} onChange={this.handleUsername} /><br />
          Password:<br />
          <input type="text" value={this.state.password} onChange={this.handlePassword} /><br /><br />
          <button onClick={(e)=>this.state.logIn(this.state.username, this.state.password, e)}>Login</button>
          <button onClick={(e)=>this.state.createUser(this.state.username, this.state.password, e)}>Create new User</button>
        </fieldset>
      </form>
    );
  }
}