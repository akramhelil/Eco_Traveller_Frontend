import React, { Component } from 'react'
import BigPostCard from '../containers/BigPostCard'
import { connect } from 'react-redux'
import UserProfile from '../containers/UserProfile'
import { adapter } from '../adapter'
import { Paper, Grid, Typography } from '@material-ui/core'
import { styles } from '../style/MateilizeStyle'
import Spinner from 'react-spinner-material'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from 'react-loader-spinner'

class PostFeed extends Component {

  state = {
    hasMore: true, 
    startIndex: 0
  }

  fetchData = () => {
    if (this.displayPosts(this.state.startIndex).length < this.props.posts.length) {
      setTimeout(() => {
        this.setState({
          startIndex: this.state.startIndex + 3
        })
      }, 1500)
    }else if (this.displayPosts(this.state.startIndex).length  =  this.props.posts.length) {
      this.setState({
        hasMore: false
      });
    }
  }

  displayPosts = (startIndex) => {
    // console.log(this.state.startIndex)
    return this.props.posts.slice(0, startIndex + 3)
  }

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
          <InfiniteScroll
            dataLength={this.displayPosts(this.state.startIndex).length}
            next={this.fetchData}
            hasMore={this.state.hasMore}
            loader={
                <div className='signup'>
                  <Loader 
                  type="Puff"
                  color="#4CAF50"
                  height="100"	
                  width="100" />
              </div>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <Typography variant='h5'>Yay! You have seen it all</Typography>
              </p>
            } >
            {this.props.posts.length < 1 && this.props.currentTraveller ? <Spinner size={120} spinnerColor={'#333'} spinnerWidth={2} visible />
                : this.displayPosts(this.state.startIndex).map(post => <BigPostCard post={post} key={post.id} />)}
                </InfiniteScroll>
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
