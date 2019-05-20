import React, { Component } from 'react'
// import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export class PostCard extends Component {
  render () {
    return (
      <React.Fragment>
        <Card style={{ margin: 5 }}>
          <h3>Hello World</h3>
          <img src='https://media.tenor.com/images/d0b5c3a005299bc843b3699a6ad790c1/tenor.gif' alt='cards' />
          <CardContent>
            <p>hello</p>
         </CardContent>
        </Card>
      </React.Fragment>
    )
  }
}

export default PostCard
