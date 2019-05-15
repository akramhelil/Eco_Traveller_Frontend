import React, { Component } from 'react'
import '../style/signup.css'

export default class Signup extends Component {
  state = {

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted')
  }

  render () {
    return (
      <React.Fragment>
        <div className="signup">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <label>First Name: </label>
            <input name="first_name" className="input" type='text' />
            <label>Last Name: </label>
            <input name="last_name" className="input" type='text' />
            <br/>
            <label>User Name: </label>
            <input name="username" className="input" type='text' />
            <br/>
            <label> Email:</label>
            <input name="email" className="input" type='text' />
            <br/>
            <label>Password:</label>
            <input name="password" className="input" type='password' />
            <label> Re-Enter Password:</label>
            <input name="password" className="input" type='password' />
            <br/>
            <label>About:</label>
            <br/>
            <textarea name="about" className="textarea" type='text' />
            <br/>
            <input className="btn" type='submit' value='Submit' />
          </form>
        </div>
      </React.Fragment>
    )
  }
}
