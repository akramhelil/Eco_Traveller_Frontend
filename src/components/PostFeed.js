import React, { Component } from 'react'
import BigPostCard from '../containers/BigPostCard'
import { connect } from 'react-redux'
import UserProfile from '../containers/UserProfile'
import { adapter } from '../adapter'
import { Paper, Card, Grid, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core'
import { styles } from '../style/MateilizeStyle'
import SideBar from './SideBar'

const sideBar = {
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 150,
  position: 'fixed',
  width: 500,
  height: 400
}

class PostFeed extends Component {
  componentDidMount () {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token')
      adapter.autoLogin(token)
        .then(traveller => this.props.dispatch({ type: 'AUTO_LOGIN', payload: traveller }))
    }
  }

  render () {
    console.log(this.props)
    return (
      <React.Fragment >
        <Grid container >
          <div className='signup'>
            <Grid item sm={5} style={styles.postfeedleft} >
              <img src='./main_page_logo.png' alt='logo' width='50%' />
              {this.props.currentTraveller
                ? <Paper>
                  <UserProfile currentTraveller={this.props.currentTraveller} />
                </Paper>
                : null
              }
            </Grid>
          </div>
          <Grid item xs={7} style={{ marginLeft: 600 }}>
            {this.props.posts.length < 1 && this.props.currentTraveller ? <h1>Loading ...</h1>
              : this.props.posts.map(post => <BigPostCard post={post} key={post.id} />)}
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    login: state.login,
    currentTraveller: state.currentTraveller
  }
}

export default connect(mapStateToProps)(PostFeed)
