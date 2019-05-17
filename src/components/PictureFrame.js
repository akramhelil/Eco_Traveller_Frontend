import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import PictureCard from '../containers/PictureCard'
export default class PictureFrame extends Component {
  render () {
    return (
      <React.Fragment>
        <Grid container>
          <Card>
            <h1>Picture Frame</h1>
            <PictureCard />
          </Card>
        </Grid>
      </React.Fragment>
    )
  }
}
