import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { styles } from '../style/MateilizeStyle'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { connect } from 'react-redux'
import { adapter } from '../adapter';
import {Dialog, TextField, DialogTitle, DialogActions, Button, DialogContent, Typography } from '@material-ui/core';


class PostCard extends React.Component {

  state = {
    open: false, 
    setOpen: false,
    title: this.props.post.title,
    content: this.props.post.content,
    img_url: this.props.post.img_url
  }


  handleSad = (id) => {
    if (this.props.login) {
      adapter.updateLikes(id, this.props.post.likes)
      .then(res => this.props.dispatch({type: 'UPDATE_SAD', payload: res}))
    }else {
      alert('Please Login!')
      console.log(this.props)
    }
  }

  handleDelete = (id) => {
    
      adapter.deletePost(id)
        .then(deletedPost => this.props.dispatch({ type: 'DELETE_POST', payload: deletedPost }))
  }
  handleOpen = () => {
    // console.log('clicked')
    this.setState({
      open: true
    })

  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })

  }
  handleSubmit = (id) => {
    adapter.updatePost(id, this.state)
      .then(updatedPost => this.props.dispatch({ type: 'UPDATE_POST', payload: updatedPost }))
    this.setState({
      open: false
    })
  }


  render() {
    // console.log(this.state.title)
    return (
      <React.Fragment>
        <Grid item style={styles.postCard} xs>
            <div className="signup">
          <Card style={{ margin: 5 }}>
              <Typography variant='h6' style={{ margin: 5 }}>{this.props.post.title.slice(0,25)}...</Typography>
            <img src={this.props.post.img_url} alt='cards' height='300' width='300' />
            {/* <CardContent> */}
                <p>{this.props.post.content.slice(0, 25)}...</p>
              <IconButton onClick={()=>this.handleSad(this.props.post.id)}>
                <SentimentDissatisfiedIcon />
              </IconButton>
                <div style={{ padding: 3, fontSize: 18, display: 'inline', fontDecoration: 'bold' }}>{this.props.post.likes}</div>
                {this.props.login && this.props.post.trip.traveller_id === this.props.currentTraveller.id ?
                  <>
                <IconButton onClick={() => this.handleDelete(this.props.post.id)}>
                <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={this.handleOpen}>
                    <EditIcon />
                    </IconButton>
                    </>
                  : 
                  null
              }
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                  <div className='signup'>
                    <DialogTitle >Edit Your Post</DialogTitle>
                       <DialogContent>
                    <img src={this.state.img_url} alt="post" width='80%' style={{margin: 10}}/>
                      <TextField
                        name="title" onChange={this.changeHandler}
                        label="Title" value={this.state.title} fullWidth />
                      <br />
                      <br/>
                      <textarea name="content" onChange={this.changeHandler} rows="4" cols="40" value={this.state.content}></textarea>
                    </DialogContent>
                   <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                     Cancel
                    </Button>
                    <Button onClick={()=>this.handleSubmit(this.props.post.id)} color="primary">
                       Submit
                    </Button>
                   </DialogActions>
                </div>
               </Dialog>
               
                <p> Trip: {this.props.post.trip.name}</p>
            {/* </CardContent> */}
          </Card>
            </div>
        </Grid>
      </React.Fragment>
    )
  }
}
function mapStateToProps (state) {
  return {
    currentTraveller: state.currentTraveller,
    login: state.login
  }
}

export default connect(mapStateToProps)(PostCard)
