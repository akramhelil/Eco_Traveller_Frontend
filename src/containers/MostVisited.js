import React from 'react'
// import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
// import { styles } from '../style/MateilizeStyle'
import Grid from '@material-ui/core/Grid'
class MostVisited extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Grid container direction='row' alignItems='center' justify='space-evenly' style={{ margin: 10 }}>
          <Grid item xs={12}>
            <Typography component='h6' variant='h6' >
            Most Visited Places
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component='img'
              image='https://geology.com/google-earth/google-earth.jpg'
              title='Eco - Traveller'
              style={{ width: 100 }}
            />
          </Grid>

          <Grid item xs={8}>
            <CardContent>
              <Typography component='h5' variant='h5'>
            Beaitful Land
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
            Hawaii

              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
            Travellers: 254
              </Typography>
            </CardContent>
          </Grid>

          <Grid item xs={4}>
            <CardMedia
              component='img'
              image='https://geology.com/google-earth/google-earth.jpg'
              title='Eco - Traveller'
              style={{ width: 100 }}
            />
          </Grid>

          <Grid item xs={8}>
            <CardContent>
              <Typography component='h5' variant='h5'>
            Beaitful Land
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
            Hawaii
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
            Travellers: 150
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component='img'
              image='https://geology.com/google-earth/google-earth.jpg'
              title='Eco - Traveller'
              style={{ width: 100 }}
            />
          </Grid>

          <Grid item xs={8}>
            <CardContent>
              <Typography component='h5' variant='h5'>
            Beaitful Land
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
            Hawaii
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
            Travellers: 134
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </React.Fragment>

    )
  }
}

export default MostVisited
