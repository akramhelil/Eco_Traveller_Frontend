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

const SignUpCom = props => <RouterLink to='/signup' {...props} />
const LoginCom = props => <RouterLink to='/login' {...props} />
const NewPostCom = props => <RouterLink to='/new' {...props} />
const AllPosts = props => <RouterLink to='/posts' {...props} />
const Articles = props => <RouterLink to='/articles' {...props} />
const About = props => <RouterLink to='/about' {...props} />

class NavBar extends Component {
  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar position='static' style={{ background: 'green' }}>
            <Toolbar>
              <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
                <Link component={RouterLink} to='/' color='inherit'>
                  <PublicIcon />
                </Link>
              </IconButton>
              <Typography variant='h6' color='inherit' className={classes.grow}>
                <Link component={AllPosts} color='inherit' style={{ textDecoration: 'none' }}>
                  Posts
                </Link>
                <Link component={Articles} color='inherit' style={{ textDecoration: 'none', margin: 10 }}>
                  Articles
                </Link>
                <Link component={About} color='inherit' style={{ textDecoration: 'none', margin: 10 }}>
                  About
                </Link>
              </Typography>
              <Link component={NewPostCom} color='inherit' style={{ textDecoration: 'none' }}>
                <Button color='inherit'> New Post</Button>
              </Link>
              <Link component={LoginCom} color='inherit' style={{ textDecoration: 'none' }}>
                <Button color='inherit'>Log In</Button>
              </Link>
              <Link component={SignUpCom} color='inherit' style={{ textDecoration: 'none' }}>
                <Button color='inherit'> Sign Up</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </React.Fragment>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(NavBar)
