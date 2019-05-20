import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { styles } from '../style/MateilizeStyle'

function UserProfile () {
  return (
    <React.Fragment>
      <Grid container direction='column' justify='flex-end' alignItems='center' style={styles.profileCard}>
        <Grid item sm={12}>
          <Avatar src='./logo.png' style={styles.avatarStyle} />
        </Grid>
        <Grid item sm={12}>
          <h1 style={styles.postDeck}> Akram Helil </h1>
        </Grid>
        <Grid item >
          <button className='button' color='primary' > Edit Profile</button >
        </Grid>
        <Grid item style={styles.input}>
          <h4>the Only reson is here for making the world a better place</h4>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserProfile
