import React from 'react'
import PostCard from '../containers/PostCard'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'



function PostDeck(props) {
    return (
      <React.Fragment>
        <Grid container >
          {props.posts
            ? props.posts.map((post) => {
              return <PostCard post={post} key={post.id} />
            }) : <h1>Loading ...</h1>}
        </Grid>
      </React.Fragment>
    )
  }


function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostDeck)
