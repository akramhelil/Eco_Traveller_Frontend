import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MostVisited from '../containers/MostVisited'
import UserProfile from '../containers/UserProfile'
import { styles } from '../style/MateilizeStyle'
// import Typography from '@material-ui/core/Typography'

export default class SideBar extends Component {
  render () {
    return (
      <React.Fragment>
        <Grid container style={styles.sideBar}
          direction='column'
          justify='center'
          alignItems='center' >
          <div className='signup'>
            <Grid item sm={12} >
              <a href="/">
              <img src='./main_page_logo.png' alt='logo' width='60%' />
              </a>
            </Grid>
          </div>
          <Grid item sm={12} >
            {this.props.currentTraveller
              ? <Paper>
                <UserProfile currentTraveller={this.props.currentTraveller} />
              </Paper>
              : null
            }
          </Grid>
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
