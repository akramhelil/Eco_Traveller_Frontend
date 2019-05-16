import React, { Component } from 'react'
import '../style/signup.css'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter';



 class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    profile_photo: "https://pbs.twimg.com/profile_images/514507612222521344/oks9ZIQK_400x400.png",
    email: "",
    about: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    adapter.createTraveller(this.state)
      .then(console.log)
    
      this.props.history.push(`/`)
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <div className="signup">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField name="first_name" label="First Name:" onChange={this.changeHandler} />
            <TextField name="last_name" label="Last Name:" onChange={this.changeHandler} />
            <br/>
            <TextField name="username" label="User Name:" onChange={this.changeHandler} />
  
            <br/>
            <TextField name="email" label="Email:" onChange={this.changeHandler} />
            <br/>
            <TextField name="password" label="Password:" onChange={this.changeHandler} type="password" />
            <TextField name="password" label="Confirm Password:" onChange={this.changeHandler} type="password" />
            <br/>
            <TextField name="about" label="About Yourself..." onChange={this.changeHandler} />
            <br />
            <br />

            <input className="btn" type='submit' value="CREATE ACCOUNT"/>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Signup