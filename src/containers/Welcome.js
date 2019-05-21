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
        <Grid item sm={3}>
          <SideBar currentTraveller={props.currentTraveller} />
        </Grid>
        <Grid item sm={9} >
          <Paper style={styles.pictureFrame}>
            <PictureFrame />
          </Paper>
          <Grid item style={styles.postDeck} >
            <Paper>
              <PostDeck />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

function mapStateToProps (state) {
  // console.log(state.currentTraveller)
  return {
    currentTraveller: state.currentTraveller
  }
}
export default connect(mapStateToProps)(Welcome)
