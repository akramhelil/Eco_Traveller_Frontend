import React, { Component } from 'react'
import '../style/style.css'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter';
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import { styles } from '../style/MateilizeStyle'
import { connect } from 'react-redux'


 class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    profile_photo: "https://pbs.twimg.com/profile_images/514507612222521344/oks9ZIQK_400x400.png",
    email: "",
    about: "",

  }

  handleSubmit = (e) => {
    e.preventDefault()
    adapter.createTraveller(this.state)
      .then(response => this.setCurrentUser(response))

  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
   
  gobackHandler = (e) => {
    e.preventDefault()
    this.props.history.goBack()
  }
   
   openWidget = (e) => {
    e.preventDefault()
    window.cloudinary.createUploadWidget(
     {
       cloudName: process.env.REACT_APP_CLOUD_NAME_KEY,
       uploadPreset: process.env.REACT_APP_UPLOAD_PRESET_KEY
     },
     (error, result) => {
       if (result && result.event === "success") {
         this.setState({
          profile_photo: `https://res.cloudinary.com/ecotraveller/image/upload/${result.info.path}`, uploaded: true
         });
       }
     }
   ).open()
   }
   
   setCurrentUser = (response) => {
     if (response.errors) {
      alert(response.errors)  
     } else {
       this.props.dispatch({type: 'SIGN_UP',payload: response.traveller})
       localStorage.setItem("token", response.token)
           //push to main page
        this.props.history.push(`/`)
    }
     }

  render() {
    return (
      <React.Fragment>
       <Grid container direction="column"  alignItems="center" justify="space-evenly">
            <Paper style={styles.signUppaper}>
              <form onSubmit={this.handleSubmit}>
                <Grid item >
                  <Avatar src={this.state.profile_photo} style={styles.newAvatarStyle} />
                </Grid>

                <Grid item style={styles.buttonSignUp} >
                  <button className="button" onClick={this.openWidget} color='primary' >Profile Photo</button >
                </Grid>

                <Grid item style={styles.input}>
                  <TextField name="first_name" label="First Name:" onChange={this.changeHandler}  style={styles.input} />
                  <TextField name="last_name" label="Last Name:" onChange={this.changeHandler}  style={styles.input} />
                </Grid>

                <Grid item style={styles.input}>
                  <TextField name="username" label="User Name:" onChange={this.changeHandler}  style={styles.input}/>
                  <TextField name="email" label="Email:" onChange={this.changeHandler} style={styles.input} />
                </Grid>

                <Grid item   style={styles.input}>
                  <TextField name="password" label="Password:" onChange={this.changeHandler} type="password"  style={styles.input}/>
                  <TextField name="password" label="Confirm Password:" onChange={this.changeHandler} type="password"  style={styles.input}/>
                </Grid>

                <Grid item   style={styles.input}>
                  <textarea name="about" onChange={this.changeHandler} rows="4" cols="40" placeholder='Tell us about yourself...' style={styles.input}></textarea>
                </Grid>
                  
              <Grid item style={styles.buttonSignUp} >
                <button className="button" onClick={this.gobackHandler}>Cancel</button>
                  <input className="button" type='submit' value="Submit"   />
                </Grid>
              </form>
            </Paper>
        </Grid>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state.currentTraveller)
  return {
    currentTraveller: state.currentTraveller
  }
}

export default connect(mapStateToProps)(Signup)