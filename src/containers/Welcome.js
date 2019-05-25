import React from 'react'
import PostDeck from '../components/PostDeck'
import PictureFrame from '../components/PictureFrame'
import SideBar from '../components/SideBar'
import { styles } from '../style/MateilizeStyle'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'

function Welcome (props) {
  return (
    <React.Fragment>
      <Grid container >
        <Grid item xs={3} style={styles.profileCard}>
          <SideBar currentTraveller={props.currentTraveller} />
        </Grid>
        <Grid item xs={9} >
          <Paper style={styles.pictureFrame}>
            <PictureFrame />
          </Paper>
          <Grid item xs={12} style={styles.postDeck} >
            <PostDeck />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

function mapStateToProps (state) {
  // console.log(state.currentTraveller)
  return {
    currentTraveller: state.currentTraveller,
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Welcome)
