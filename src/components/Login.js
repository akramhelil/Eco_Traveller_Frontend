import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter';
import '../style/style.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import { styles } from '../style/MateilizeStyle'
import { connect } from 'react-redux'
 class Login extends Component {
  state = {
    username: '',
    password: ''
  }
   handleSubmit = (e) => {
     e.preventDefault()
     adapter.travellerLogin(this.state)
       .then(response => {
         if (response.errors) {
           alert(response.errors)
           this.setState({ username: '', password: '' })
           this.props.history.push(`/login`)
         } else {
           this.setCurrentUser(response)
         }
      })
  }
   
   setCurrentUser = (response) => {
    if (response.errors) {
      alert(response.errors)
      this.setState({username: '', password: ''})
      this.props.history.push(`/login`)
    } else {
      this.props.dispatch({type: 'LOG_IN',payload: response.traveller})
      localStorage.setItem("token", response.token)
          // go back to the main page
       this.props.history.push(`/`)
    }
 }

  changeHandler = (e) => {
    this.setState({
     [ e.target.name]: e.target.value
    })
  }

   render() {

    return (
      <React.Fragment>
        <Grid container direction="column" alignItems="center" >
        <Grid item style={{padding:40}}>
          <Paper style={styles.paper}>
            <div className="signup">
              <img src="../main_page_logo.png" alt="login" width='300' />
            <form onSubmit={this.handleSubmit}>
                  <TextField name='username' label='User Name:' onChange={this.changeHandler} value={this.state.username}/>
              <br />
                  <TextField name='password' label='Password:' onChange={this.changeHandler} type='password' value={this.state.password}/>
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

 function mapStateToProps(state) {
  // console.log(state.currentTraveller)
  return {
    currentTraveller: state.currentTraveller,
    login: state.login
    // currentTrip: state.currentTraveller.trips[-1] ? state.currentTraveller.trips[-1] : null
  }
}


 export default connect(mapStateToProps)(Login)