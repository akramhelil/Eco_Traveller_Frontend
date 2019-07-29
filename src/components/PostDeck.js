import React, { Component } from 'react'
import PostCard from '../containers/PostCard'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
class PostDeck extends Component {
  render () {
    return (
      <React.Fragment>
        <Grid container >
          {this.props.posts
            ? this.props.posts.map((post) => {
              return <PostCard post={post} key={post.id} />
            }) : <h1>Loading ...</h1>}
        </Grid>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  // console.log(state.currentTraveller)
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostDeck)
