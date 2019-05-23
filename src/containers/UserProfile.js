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
      <Grid container direction='column' justify='flex-end' alignItems='center' style={styles.profileCard}>
        <Grid item sm={12}>
          <Avatar src={props.currentTraveller.profile_photo} style={styles.avatarStyle} />
        </Grid>
        <Grid item sm={12}>
          <Typography style={styles.postDeck} component='h4' variant='h4'>{props.currentTraveller.first_name} </Typography>
          <Typography variant='subtitle1' color='textSecondary'>Posts: {props.currentTraveller.posts.length}
            &nbsp;&nbsp;
          Trips: {props.currentTraveller.trips.length}
          </Typography>
        </Grid>
        <Grid item >
          <Link component={EditProfile}>
            <button className='button' color='primary' > Edit Profile</button >
          </Link>
          <Link component={MyTrips}>
            <button className='button' color='primary' > My Trips</button >
          </Link>
        </Grid>
        <div className='signup'>
          <Grid item style={{ padding: 20 }}>
            <Typography component='h6' variant='h6'>
              {props.currentTraveller.about}
            </Typography>
          </Grid>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default UserProfile
