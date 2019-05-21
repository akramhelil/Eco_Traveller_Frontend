import React, { Component } from 'react'
import PostCard from '../containers/PostCard'
import Grid from '@material-ui/core/Grid'
import { styles } from '../style/MateilizeStyle'
import { connect } from 'react-redux'
class PostDeck extends Component {
  render () {
    // console.log(this.props)
    return (
      <React.Fragment>
        <Grid container style={styles.postDeck}>
          {
            this.props.posts.map((post) => {
              return <PostCard post={post} key={post.id} />
            })
          }
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
