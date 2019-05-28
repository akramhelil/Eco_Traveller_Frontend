import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PublicIcon from '@material-ui/icons/Public'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../style/MateilizeStyle'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'

const SignUpCom = props => <RouterLink to='/signup' {...props} />
const LoginCom = props => <RouterLink to='/login' {...props} />
const NewPostCom = props => <RouterLink to='/newpost' {...props} />
const NewTipCom = props => <RouterLink to='/newtrip' {...props} />
const AllPosts = props => <RouterLink to='/posts' {...props} />
const Articles = props => <RouterLink to='/articles' {...props} />
const About = props => <RouterLink to='/about' {...props} />

class NavBar extends Component {

  logOutHandle = () => {
    localStorage.removeItem("token")
    this.props.dispatch({type: 'LOG_OUT', payload: false})
    this.props.history.push(`/`)
    window.location.reload(false); 
  }


  render () {
    // console.log('Nav Bar Props', this.props.currentTraveller)
    const { classes } = this.props
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.root}>
              <AppBar  style={{ background: '#4CAF50' }}>
                <Toolbar>
                  <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
                    <Link component={RouterLink} to='/' color='inherit'>
                      <PublicIcon />
                    </Link>
                  </IconButton>
                  <Typography variant='h6' color='inherit' className={classes.grow}>
                    <Link component={RouterLink} to='/' color='inherit' style={styles.navBarLinks}>
                  Home
                    </Link>
                    <Link component={AllPosts} color='inherit' style={styles.navBarLinks}>
                  Posts
                    </Link>
                    <Link component={Articles} color='inherit' style={styles.navBarLinks}>
                  Articles
                    </Link>
                    <Link component={About} color='inherit' style={styles.navBarLinks}>
                  About
                    </Link>
                  </Typography>
                  {this.props.currentTraveller && !this.props.currentTrip
                    ? <Link component={NewTipCom} color='inherit' style={styles.navBarLinks}>
                      <Button color='inherit'> New Trip</Button>
                    </Link> : null}
                  {this.props.currentTraveller
                    ? <Link component={NewPostCom} color='inherit' style={styles.navBarLinks}>
                      <Button color='inherit'> New Post</Button>
                    </Link>
                    : null}
                  {this.props.currentTraveller ? null : <Link component={LoginCom} color='inherit' style={styles.navBarLinks}>
                    <Button color='inherit'>Log In</Button>
                  </Link> }

                  {this.props.currentTraveller ? null
                    : <Link component={SignUpCom} color='inherit' style={styles.navBarLinks}>
                      <Button color='inherit'> Sign Up</Button>
                    </Link>}
                  {this.props.currentTraveller ?
                    <Button color='inherit' onClick={this.logOutHandle}> Log Out</Button> : null}
                </Toolbar>
              </AppBar>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  // console.log(state.currentTrip)
  return {
    currentTraveller: state.currentTraveller,
    login: state.login

  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(connect(mapStateToProps)(NavBar))
