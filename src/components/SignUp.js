import React, { Component } from 'react';
import BAapi from '../utilities/BAapi';
import { Redirect } from 'react-router'

class SignUp extends Component {
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
      user: {
        name: this.name.value,
        email: this.email.value,
        password: this.password.value,
        password_confirmation: this.password_confirmation.value
      }
    }
    
    const api = new BAapi();
    api.signUp(data, this.auth );

  }

  loginForm() {
    return (
      <form onSubmit = { this.login } >
        <label htmlFor="name">Name</label>
        <input type="text" autoFocus autoComplete="name" ref={node => { this.name = node }} />

        <label htmlFor="email">Email</label>
        <input type="email" autoFocus autoComplete="username" ref={node => { this.email = node }} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" autoComplete="new-password" ref={node => { this.password = node }} />

        <label htmlFor="password_confirmation">Password</label>
        <input type="password" name="password_confirmation" autoComplete="new-password" ref={node => { this.password_confirmation = node }} />

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

export default SignUp