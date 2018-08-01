import React, { Component } from 'react';
import BAapi from '../utilities/BAapi';
import { Redirect } from 'react-router'

class Login extends Component {
  constructor() {
    super();

    // bind functions
    this.login = this.login.bind(this);
    this.auth = this.auth.bind(this);

    // state
    this.state = { user: {}}
  }

  auth( response ) {
    this.setState( {user: response.data});
  }


  login(e) {
    e.preventDefault();
    
    const data = {
      email: this.email.value,
      password: this.password.value
    }
    
    const api = new BAapi();
    api.login(data, this.auth );

  }

  loginForm() {
    return (
      <form onSubmit = { this.login } >
        <label htmlFor="email">Email</label>
        <input type="email" autoFocus autoComplete="username" ref={node => { this.email = node }} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" autoComplete="current-password" ref={node => { this.password = node }} />

        <input type="submit" value="Login" />
      </form >
    );
  }

  render() {
    if (this.state.user.id !== undefined) {
      return (
        <Redirect push to={{
          pathname: "/flight_search",
          state: { referrer: this.state.user }}} />
      )
    } else {
      return this.loginForm();
    }
  }
}

export default Login