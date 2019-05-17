import React, { Component } from 'react'
import '../style/style.css'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter';
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid';


const avatarStyle = {
    margin: 50,
    width: 150,
  height: 150,
  textAligin: 'center'
}

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
      .then(console.log)
    
      this.props.history.push(`/`)
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="center">
          <form onSubmit={this.handleSubmit}>
            <Avatar
            src={this.state.profile_photo}
              style={avatarStyle}
            />
            <button
              className="button" onClick={this.openWidget} color='primary'>
              Profile Photo</button>
            <br />
            <label htmlFor="profile_photo"></label>
            <TextField name="first_name" label="First Name:" onChange={this.changeHandler} />
            <TextField name="last_name" label="Last Name:" onChange={this.changeHandler} />
            <br/>
            <TextField name="username" label="User Name:" onChange={this.changeHandler} />
            <br/>
            <TextField name="email" label="Email:" onChange={this.changeHandler} />
            <br/>
            <TextField name="password" label="Password:" onChange={this.changeHandler} type="password" />
            <br/>
            <TextField name="password" label="Confirm Password:" onChange={this.changeHandler} type="password" />
            <br />
            <br/>
            <textarea name="about" onChange={this.changeHandler} 
              rows="5" cols="33" placeholder='Tell us about yourself...'>
              </textarea>
            <br />
            <br />
            <input className="button" type='submit' value="Submit"/>
          </form>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Signup