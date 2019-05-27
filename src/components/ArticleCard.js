import React from 'react'
import { styles } from '../style/MateilizeStyle'
import { Grid, Typography, Paper, CardMedia, Card } from '@material-ui/core'

class ArticleCard extends React.Component {
  render () {
    return (
      <React.Fragment >
        <Card style={styles.paper}>
          <Grid container direction='row' alignItems='center' justify='space-evenly'>
            <Grid item xs={4}>
              <CardMedia
                component='img'
                image={this.props.article.urlToImage ? this.props.article.urlToImage : './logo.png'}
                title='Eco - Traveller'
                style={{ width: '60%' }}
              />
            </Grid >
            <Grid item xs={8}>
              <Typography variant='h5'>{this.props.article.title}</Typography>
              <Typography variant='subtitle1'>Author: {this.props.article.author}</Typography>
              <Typography variant='subtitle2'>Source: {this.props.article.source.name}</Typography >
              <Typography variant='body2'>Content: {this.props.article.content ? this.props.article.content : this.props.article.description}</Typography>
              <a id='articlelink'
                href={this.props.article.url}
                target='_blank' rel='noopener noreferrer'>
                <Typography variant='h6'>
               Read More ...
                </Typography>
              </a>

            </Grid >
          </Grid >
        </Card>
      </React.Fragment >
    )
  }
}

export default ArticleCard
