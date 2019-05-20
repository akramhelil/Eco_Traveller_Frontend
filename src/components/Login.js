import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter';
import '../style/style.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import { styles } from '../style/MateilizeStyle'
 class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    adapter.travellerLogin(this.state)
      .then(console.log)
    // SetState for the Current user via Redux
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
        <Grid container direction="column" alignItems="center" >
        <Grid item >
          <Paper style={styles.paper}>
            <div className="signup">
              <img src="../logo.png" alt="login" width='300' />
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
            </Paper>  
            </Grid>
        </Grid>
      </React.Fragment>
    )
  }
 }


export default Login
