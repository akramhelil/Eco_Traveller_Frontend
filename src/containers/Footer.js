import React from 'react'
import Grid from '@material-ui/core/Grid'
function Footer() {
    return (
      <React.Fragment>
        <div className='signup'>
          <footer id='footer'>
            <Grid container
              direction='row'
              justify='center'
              alignItems='flex-end' >
              <Grid item xs={3} >
                Copyright &copy;
                <span style={{ margin: 5 }} role='img' aria-label='earth'>
                🌎
                </span>
                 Eco-Traveller.com
              </Grid>
            </Grid>
          </footer>
        </div>
      </React.Fragment>
    )
  }


export default Footer