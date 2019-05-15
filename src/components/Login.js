import React, { Component } from 'react'

export default class Login extends Component {
  render () {
    return (
      <div>
        <h1>Log In</h1>
        <form action='/'>
          <label htmlFor='username'>Username:</label>
          <input type='text' />
          <br />
          <label htmlFor='password'>Passwrod:</label>
          <input type='password' />
          <br />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}
