import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
export default class Footer extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='signup'>
          <footer>
            <Grid container
              direction='row'
              justify='center'
              alignItems='flex-end' >
              <Grid item xs={3}>
                <Link to='/'>
               Home
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to='/posts'>
               Posts
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to='/articles'>
               Articles
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to='/about'>
               About
                </Link>
              </Grid>
              <br />
              <Grid item xs={12}>
                Copyright &copy;  eco-traveller.com
              </Grid>
            </Grid>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}
