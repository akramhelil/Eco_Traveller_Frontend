import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'
import NewPost from './components/NewPost'
// import Link from '@material-ui/core/Link'
// import { Link as RouterLink } from 'react-router-dom'
import PostDeck from './components/PostDeck'
import Welcome from './containers/Welcome'
import About from './containers/About'
import Articles from './containers/Articles'
import Grid from '@material-ui/core/Grid'
import NewTrip from './components/NewTrip'

function App () {
  return (
    <React.Fragment>
      <Grid>
        <NavBar />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/articles' component={Articles} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/newpost' component={NewPost} />
          <Route path='/newtrip' component={NewTrip} />
          <Route path='/posts' component={PostDeck} />
          <Route exact path='/' component={Welcome} />
        </Switch>
      </Grid>
    </React.Fragment>
  )
}

export default App
