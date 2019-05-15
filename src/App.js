import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <h1>Hello Eco Traveller Logo </h1>
        <NavBar />
        <Route exact path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </React.Fragment>

    )
  }
}
