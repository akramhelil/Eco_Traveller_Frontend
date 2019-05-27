import React, { Component } from 'react'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class FrontPageArticle extends Component {
  render () {
    return (
      <Grid container direction='row' alignItems='center' justify='space-evenly' style={{ margin: 10 }}>
        <Grid item xs={4}>
          <CardMedia
            component='img'
            image={this.props.article.urlToImage ? this.props.article.urlToImage : './logo.png'}
            title='Eco - Traveller'
            style={{ width: 100 }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography variant='subtitle1'>
              {this.props.article.title.slice(0, 50)}...
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              {this.props.article.author}
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <a id='articlelink'
                href={this.props.article.url}
                target='_blank' rel='noopener noreferrer'>
               Read More ...
              </a>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    )
  }
}

export default FrontPageArticle
