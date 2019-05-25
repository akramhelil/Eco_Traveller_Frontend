import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { styles } from '../style/MateilizeStyle'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const MyTrips = props => <RouterLink to='/trips' {...props} />
const EditProfile = props => <RouterLink to='/editprofile' {...props} />

function UserProfile (props) {
  console.log(props)
  return (
    <React.Fragment>
      <div className='signup'>
        <Grid container direction='column' justify='center' alignItems='center' style={styles.profileCard}>
          <Grid item xs={12}>
            <Avatar src={props.currentTraveller.profile_photo} style={styles.avatarStyle} />
          </Grid>

          <Grid item xs={12}>
            <Typography style={styles.postDeck} component='h4' variant='h4'>{props.currentTraveller.first_name} </Typography>
            <Typography variant='subtitle1' color='textSecondary'>Posts: {props.currentTraveller.posts.length}
            &nbsp;&nbsp;
          Trips: {props.currentTraveller.trips.length}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link component={EditProfile}>
              <button id='buttonprof' color='primary' > Edit Profile</button >
            </Link>
            <Link component={MyTrips}>
              <button id='buttonprof' color='primary' > My Trips</button >
            </Link>
            <Link component={MyTrips}>
              <button id='buttonprof' color='primary' > My Posts</button >
            </Link>
          </Grid>
          <Grid item xs={12} style={{ padding: 10 }}>
            <Typography component='h6' variant='h6'>
              {props.currentTraveller.about}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default UserProfile
