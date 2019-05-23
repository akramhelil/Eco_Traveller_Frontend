import React, { Component } from 'react'
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Footer from '../containers/Footer'
import MostVisited from '../containers/MostVisited'
import UserProfile from '../containers/UserProfile'
import { styles } from '../style/MateilizeStyle'
export default class SideBar extends Component {
  render () {
    return (
      <React.Fragment>
        <Grid container >
          {this.props.currentTraveller
            ? <Grid item sm={12} style={styles.footer}>
              <Paper>
                <UserProfile currentTraveller={this.props.currentTraveller} />
              </Paper>
            </Grid> : null
          }
          <Grid item sm={12} style={styles.footer}>
            <Paper >
              <MostVisited />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
