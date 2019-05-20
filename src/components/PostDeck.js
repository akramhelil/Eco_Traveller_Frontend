import React, { Component } from 'react'
import PostCard from '../containers/PostCard'
import Grid from '@material-ui/core/Grid'
import { styles } from '../style/MateilizeStyle'

class PostDeck extends Component {
  render () {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item style={styles.postCard} xs>
            <PostCard />
          </Grid>
          <Grid item style={styles.postCard} xs>
            <PostCard />
          </Grid>
          <Grid item style={styles.postCard} xs>
            <PostCard />
          </Grid>
          <Grid item style={styles.postCard} xs>
            <PostCard />
          </Grid>
          <Grid item style={styles.postCard} xs>
            <PostCard />
          </Grid>
          <Grid item style={styles.postCard} xs>
            <PostCard />
          </Grid>
          <Grid item style={styles.postCard} xs>
            <PostCard />
          </Grid>
          <Grid item style={styles.postCard} xs>
            <PostCard />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default PostDeck
