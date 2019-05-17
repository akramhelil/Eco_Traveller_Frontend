import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter';
import '../style/style.css'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    adapter.travellerLogin(this.state)
      .then(console.log)
      this.props.history.push(`/`)
  }

  changeHandler = (e) => {
    this.setState({
     [ e.target.name]: e.target.value
    })
  }

  render() {
    // console.log(this.state)
    return (
      <React.Fragment>
        <div className="signup">
          <h1>Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField name='username' label='User Name:' onChange={this.changeHandler} />
            <br />
            <TextField name='password' label='Password:' onChange={this.changeHandler} type='password' />
            <br />
            <br/>
            <input className='button' type='submit' value='LOGIN' />
          </form>
        </div>
      </React.Fragment>
    )
  }
}
