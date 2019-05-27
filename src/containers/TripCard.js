import React, { Component } from 'react'
import {
    Grid, Card, CardContent, CardMedia, CardHeader, Typography, IconButton,
    Dialog, TextField, DialogTitle, DialogActions, Button, DialogContent} from '@material-ui/core'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import { adapter } from '../adapter';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'


export default class TripCard extends Component {

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
    
    
  render () {
    // console.log(this.props)
    return (
      <React.Fragment>
        <div className='signup'>
          <Grid item style={{ padding: 20 }}>
            <Card>
              <CardHeader title={this.props.post.title}
                subheader={this.props.trip.name} />
              <CardMedia
                component='img' style={{ width: 350, marginLeft: '25%' }} image={this.props.post.img_url}
                title={this.props.trip.name} />
              <CardContent>
                <Typography variant='h6' color='textSecondary' component='p' style={{ width: 750 }}>
                  {this.props.post.content}
                </Typography>
              </CardContent>
              <IconButton onClick={() => this.handleSad(this.props.post.id)} >
                <SentimentDissatisfiedIcon />
              </IconButton>
                <div style={{ padding: 10, fontSize: 18, display: 'inline', fontDecoration: 'bold' }}>{this.props.post.likes}</div>
                <IconButton onClick={() => this.handleDelete(this.props.post.id)}>
                     <DeleteIcon />
                </IconButton>
                <IconButton onClick={this.handleOpen}>
                    <EditIcon />
                </IconButton>
            </Card>
          </Grid>
        </div>
            
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                  <div className='signup'>
                    <DialogTitle >Edit Your Post</DialogTitle>
                       <DialogContent>
                    <img src={this.state.img_url} alt="post" width='80%' style={{margin: 20}}/>
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
    
      </React.Fragment>
    )
  }
}
