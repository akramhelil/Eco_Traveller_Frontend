import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { styles } from '../style/MateilizeStyle'

function PostCard ({ post }) {
  return (
    <React.Fragment>
      <Grid item style={styles.postCard} xs>
        <Card style={{ margin: 5 }}>
          <h3>{post.title.slice(0, 15)}</h3>
          <img src={post.img_url} alt='cards' height='200' width='200' />
          <CardContent>
            <p>{post.content.slice(0, 15)}...</p>
            <p> UpVote: {post.likes}</p>
            <p> Trip: {post.trip.name}</p>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  )
}

export default PostCard
