import React, { Component } from 'react'
import '../style/style.css'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter'
import Grid from '@material-ui/core/Grid'
// import Image from 'material-ui-image'
// import CardMedia from '@material-ui/core/CardMedia';

export default class NewPost extends Component {

  state = {
    // trip_id: 1
    title: '',
    likes: 0,
    content: '',
    img_url: './logo.png'

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
          img_url: `https://res.cloudinary.com/ecotraveller/image/upload/${result.info.path}`, uploaded: true
         });
       }
     }
   ).open()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    adapter.createPost(this.state)
      .then(console.log)
      this.props.history.push(`/`)
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render () {
    return (
      <React.Fragment>
        <Grid container justify='center' alignItems='center'>
          <img src={this.state.img_url} style={{ height: "10%", width: 300, margin: 20 }} alt='post-picute'/>
          <form onSubmit={this.handleSubmit}>
            <button
              className='button' onClick={this.openWidget} color='primary'>
              Upload Photo</button>
            <br />
            <label htmlFor='profile_photo' />
            <TextField name='title' label='Title:' onChange={this.changeHandler} />
            <br />            <br />            <br />
            <textarea name='content' onChange={this.changeHandler}
              rows='5' cols='33' placeholder='Tell us about your post...' />
            <br />
            <br />
            <input className='button' type='submit' value='Submit' />
          </form>
        </Grid>
      </React.Fragment>
    )
  }
}
