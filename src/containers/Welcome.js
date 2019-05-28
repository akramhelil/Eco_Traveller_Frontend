import React from 'react'
import PostDeck from '../components/PostDeck'
import PictureFrame from '../components/PictureFrame'
import SideBar from '../components/SideBar'
import { styles } from '../style/MateilizeStyle'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import QueueAnim from 'rc-queue-anim'

function Welcome (props) {
  return (
    <React.Fragment>
      <QueueAnim duration={5000} type='right' appear >
        <Grid container key='1'>
          <Grid item xs={3} style={styles.profileCard} key='2'>
            <SideBar currentTraveller={props.currentTraveller} key='2' />
          </Grid>
          <Grid item xs={9} key='3'>
            <Paper style={styles.pictureFrame} key='4'>
              <PictureFrame key='5' />
            </Paper>
            <Grid item xs={12} style={styles.postDeck} key='6'>
              <PostDeck key='7' />
            </Grid>
          </Grid>
        </Grid>
      </QueueAnim>
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
