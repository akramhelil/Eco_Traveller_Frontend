import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { styles } from '../style/MateilizeStyle'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

// const MyTrips = props => <RouterLink to='/trips' {...props} />
const MyPosts = props => <RouterLink to='/myposts' {...props} />
const EditProfile = props => <RouterLink to='/editprofile' {...props} />

class UserProfile extends React.Component {
  // console.log(this.props)
  render () {
    return (
      <React.Fragment>
        <div className='signup'>
          <Grid container direction='column' justify='center' alignItems='center' style={styles.profileCard}>
            <Grid item xs={12}>
              <Avatar src={this.props.currentTraveller.profile_photo} style={styles.avatarStyle} />
            </Grid>

            <Grid item xs={12}>
              <Typography style={styles.postDeck} component='h4' variant='h4'>{this.props.currentTraveller.first_name} </Typography>
              <Typography variant='subtitle1' color='textSecondary'>Posts: {this.props.currentTraveller.posts.length}
                &nbsp;&nbsp;
          Trips: {this.props.currentTraveller.trips.length}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Link component={EditProfile}>
                <button id='buttonprof' color='primary' > Edit Profile</button >
              </Link>
              {/* <Link component={MyTrips}>
                <button id='buttonprof' color='primary' > My Trips</button >
              </Link> */}
              <Link component={MyPosts}>
                <button id='buttonprof' color='primary' > My Posts</button >
              </Link>
            </Grid>
            <Grid item xs={12} style={{ padding: 10 }}>
              <Typography component='h6' variant='h6'>
                {this.props.currentTraveller.about}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

// function mapStateToProps (state) {
//   return {
//     currentTraveller: state.currentTraveller
//   }
// }

export default UserProfile
