import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { styles } from '../style/MateilizeStyle'

function UserProfile (props) {
  // console.log(props.currentTraveller)
  return (
    <React.Fragment>
      <Grid container direction='column' justify='flex-end' alignItems='center' style={styles.profileCard}>
        <Grid item sm={12}>
          <Avatar src={props.currentTraveller.profile_photo} style={styles.avatarStyle} />
        </Grid>
        <Grid item sm={12}>
          <h1 style={styles.postDeck}>{props.currentTraveller.first_name} </h1>
        </Grid>

        <Grid item >
          <button className='button' color='primary' > Edit Profile</button >
          {/* Create Link that renders travellers trips inside has the posts that belong to that trip */}
          {/*  */}
          <button className='button' color='primary' > My Trips</button >
        </Grid>
        <Grid item style={styles.input}>
          <h4>{props.currentTraveller.about}</h4>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserProfile
