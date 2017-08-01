import React from 'react';

export default class Login extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      loggedIn: prop.loggedIn,
      logOut: prop.logOut,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loggedIn: nextProps.loggedIn });
  }

  render() {
    return (!this.state.loggedIn) ? null : (
      <div>
        <button style={{height: 25}} onClick={ this.state.logOut } >Logout</button>
      </div>
    );
  }
}