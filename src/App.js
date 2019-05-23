import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'
import NewPost from './components/NewPost'
import PostDeck from './components/PostDeck'
import Footer from './containers/Footer'
import Welcome from './containers/Welcome'
import About from './containers/About'
import Articles from './containers/Articles'
import NewTrip from './components/NewTrip'
import Trips from './containers/Trips'
import EditProfile from './containers/EditProfile'

import Grid from '@material-ui/core/Grid'
import { adapter } from './adapter'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import { styles } from './style/MateilizeStyle'

class App extends React.Component {
  componentDidMount () {
    // Fetch all the Posts for the redux State
    adapter.getPosts()
      .then(posts => this.props.dispatch({ type: 'FETCH_POSTS', payload: posts }))

    adapter.getTrips()
      .then(trips => this.props.dispatch({ type: 'FETCH_TRIPS', payload: trips }))

    // Auto Login after refresh the page
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token')
      adapter.autoLogin(token)
        .then(traveller => this.props.dispatch({ type: 'AUTO_LOGIN', payload: traveller }))
    }
  }
  render () {
    // console.log(this.props.dispatch)
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12}>
            <NavBar />
            <Switch>
              <Route path='/editprofile' render={(props) => { return <EditProfile {...this.props.currentTraveller} /> }} />
              <Route path='/trips' component={Trips} />
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
          <Grid item sm={12} style={styles.footer}>
            <Paper>
              <Footer />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentTraveller: state.currentTraveller
  }
}

export default connect(mapStateToProps)(App)
