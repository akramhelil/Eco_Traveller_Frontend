import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

// const cardStyle = {
//   margin: 20,
//   width: 400,
//   float: 'right'
// }

// const footerStyle = {
//   margin: 20,
//   width: 300,
//   float: 'center'
// }
export default class SideBar extends Component {
  render () {
    return (
      <React.Fragment>
        <Grid container >
          <Card className='sideBar'>
            <h2>Traveller Profile Component</h2>
            <h2>Most Visited Places</h2>
            <Card className='footer' >
              <h2>Footer</h2>
            </Card>
          </Card>
        </Grid>
      </React.Fragment>
    )
  }
}
