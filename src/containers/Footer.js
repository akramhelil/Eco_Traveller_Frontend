import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
export default class Footer extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='signup'>
          <footer id='footer'>
            <Grid container
              direction='row'
              justify='center'
              alignItems='flex-end' >
              <Grid item xs={3} >
                Copyright &copy;  🌎  Eco-Traveller.com
              </Grid>
            </Grid>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}
