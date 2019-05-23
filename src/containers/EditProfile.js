import React, { Component } from 'react'
import '../style/style.css'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter';
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import { styles } from '../style/MateilizeStyle'
import { connect } from 'react-redux'


class EditProfile extends Component {
    
    state = {
        first_name: "",
        last_name: "",
        username: "",
        profile_photo: "https://pbs.twimg.com/profile_images/514507612222521344/oks9ZIQK_400x400.png",
        email: "",
        about: "",
        
    }

    componentDidMount() {
        // console.log(this.props)
        this.setState({
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            username: this.props.username,
            profile_photo: this.props.profile_photo,
            email: this.props.email,
            about: this.props.about,
        })
        
    }
    // compnentDidUpdate

      handleSubmit = (e, id) => {
          e.preventDefault()
          let updateedInfo = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            profile_photo: this.state.profile_photo,
            email: this.state.email,
            about: this.state.about,
          }
          adapter.upateTraveller(updateedInfo, id)
        .then(response => this.setCurrentUser(response))

    
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
       
       setCurrentUser = (response) => {
         this.props.dispatch({type: 'UPDATE_PROFILE',payload: response.traveller})
         localStorage.setItem("token", response.token)
             // go back to the main page
          this.props.history.push(`/`)
      }
    
    render() {
      console.log(this.props)
    return (
        <React.Fragment>
            {this.props ?
                <Grid container direction="column" alignItems="center" justify="space-evenly">
                    <Paper style={styles.paper}>
                        <form onSubmit={(e)=>this.handleSubmit(e, this.props.id)}>
                            <Grid item >
                                <Avatar src={this.state.profile_photo} style={styles.newAvatarStyle} />
                            </Grid>
 
                            <Grid item style={styles.buttonSignUp} >
                                <button className="button" onClick={this.openWidget} color='primary' >Update Photo</button >
                            </Grid>
 
                            <Grid item style={styles.input}>
                                <TextField name="first_name" onChange={this.changeHandler} style={styles.input} value={this.state.first_name} />
                                <TextField name="last_name" onChange={this.changeHandler} style={styles.input}  value={this.state.last_name} />
                            </Grid>
 
                            <Grid item style={styles.input}>
                                <TextField  disabled name="username" onChange={this.changeHandler} style={styles.input}  value={this.state.username} />
                                <TextField name="email" onChange={this.changeHandler} style={styles.input} value={this.state.email}/>
                            </Grid>
 
                            <Grid item style={styles.input}>
                                <textarea name="about" onChange={this.changeHandler} rows="4" cols="40" style={styles.input}  value={this.state.about}></textarea>
                            </Grid>
                            <Grid item style={styles.buttonSignUp} >
                                <input className="button" type='submit' value="Update" />
                            </Grid>
                        </form>
                    </Paper>
                </Grid> : <h1>Loading ...</h1>}
        </React.Fragment>
    )
  }
}


export default connect()(EditProfile)


