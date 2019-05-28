import React, { Component } from 'react'
import '../style/style.css'
import TextField from '@material-ui/core/TextField'
import { adapter } from '../adapter'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';


 class NewPost extends Component {

  state = {
    trip_id: '', 
    title: '',
    likes: 0,
    content: '',
    img_url: './logo.png',
    open: false
  }
   
   
  //  componentDidMount() {
  //    console.log('Mounted')
  //  }
  
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
      .then(response => this.renderNewPost(response))
  }
   
  setCurrentTrip = (id) => {
    this.props.dispatch({type: 'SET_CURRENT_TRIP', payload: id})
   }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleSelectChange = (e) => {
    this.setState({
      trip_id: e.target.value,
    },()=> this.setCurrentTrip(this.state.trip_id))
  }

   dropDownList = () => {
     if (this.props.currentTraveller) {
       let optionList = this.props.currentTraveller.trips.map((trip) => {
         return <MenuItem value={trip.id}  key={trip.id}> {trip.name}</MenuItem>
       })
       return optionList
    }
   }
     

   renderNewPost = (newPost) => {
     console.log(newPost)
     this.props.dispatch({type: 'ADD_POST', payload: newPost})
     this.props.history.push('/')
     window.location.reload(false); 
   }
  
   render() {
     console.log(this.state)
    return (
      <React.Fragment>
        <Grid container justify='center' alignItems='center'>
          <div className='signup'>
            <Paper style={{ margin: 20, paddingLeft: 80, paddingTop: 40, paddingBottom: 20, paddingRight: 80 }}>
              <img src={this.state.img_url} style={{ height: "10%", width: 300, margin: 20 }} alt='post-picute' />
              <h3>Please Pick a Trip:</h3>
              <form onSubmit={this.handleSubmit}>
               <Select autoWidth
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value={this.state.trip_id}
                  onChange={this.handleSelectChange}
                >
                  {this.dropDownList()}
                </Select>
                <br /> 
                <br/>
            <button
              className='button' onClick={this.openWidget} color='primary'>
              Upload Photo</button>
            <br />
            <label htmlFor='profile_photo' />
            <TextField name='title' label='Title:' onChange={this.changeHandler} />
            <br />            <br />            <br />
            <textarea name='content' onChange={this.changeHandler}
              rows='5' cols='50' placeholder='Tell us about your post...' />
            <br />
            <br />
            <input className='button' type='submit' value='Submit' />
            </form>
          </Paper>
         </div>
        </Grid>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.currentTraveller)
  return {
    currentTraveller: state.currentTraveller
  }
}


export default connect(mapStateToProps)(NewPost)