import React, { Component } from 'react'
import { Paper, Card, Grid, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { connect } from 'react-redux'
import { adapter } from '../adapter';

import {Dialog, TextField, DialogTitle, DialogActions, Button, DialogContent,  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'

class BigPostCard extends Component {

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
    return (
      <React.Fragment>
        <div className='signup'>
          <Grid container  direction='row' justify='space-evenly'
            alignItems='center' >
            <Card style={{ margin: 25 }}>
              <Grid item xs={12}>
                <CardHeader title={this.props.post.title}
                  subheader={this.props.post.trip.name} />
              </Grid>
              <Grid item xs={12}>
                <CardMedia
                  component='img' style={{ width: 800 }} image={this.props.post.img_url}
                  title={this.props.post.trip.name}/>
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <Typography variant='h6' color='textSecondary' component='p' style={{ width: 750 }}>
                    {this.props.post.content}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item >
                <CardContent>
                <IconButton onClick={()=>this.handleSad(this.props.post.id)} >
                <SentimentDissatisfiedIcon />
              </IconButton>
                <div style={{ padding: 10, fontSize: 18, display: 'inline', fontDecoration: 'bold' }}>{this.props.post.likes}</div>
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
                                
                </CardContent>
                </Grid>
            </Card>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
    // console.log(state.currentTraveller)
    return {
      currentTraveller: state.currentTraveller,
      // currentTrip: state.currentTrip,
      login: state.login
    }
  }

export default connect(mapStateToProps)(BigPostCard)
