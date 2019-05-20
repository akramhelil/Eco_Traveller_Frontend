import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Footer extends Component {
  render () {
    return (
      <React.Fragment>
        <footer>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/posts'>
            <li>Posts</li>
          </Link>

          <Link to='/articles'>
            <li>Articles</li>
          </Link>

          <Link to='/about'>
            <li>About</li>
          </Link>

          <br />
          Copyright &copy;  eco-traveller.com
        </footer>
      </React.Fragment>
    )
  }
}
