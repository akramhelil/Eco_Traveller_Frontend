import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'
import NewPost from './components/NewPost'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import PostDeck from './components/PostDeck'
import Welcome from './containers/Welcome'

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <br />
        <Link component={RouterLink} to='/' color='inherit'>
          <img src='logo.png' alt='logo' with='50' height='50' />
        </Link>
        <br />
        <NavBar />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/new' component={NewPost} />
          <Route path='/posts' component={PostDeck} />
          <Route exact path='/' component={Welcome} />
        </Switch>
      </React.Fragment>

    )
  }
}
