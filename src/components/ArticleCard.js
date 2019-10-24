import React from 'react'
import { styles } from '../style/MateilizeStyle'
import { Grid, Typography, CardMedia, Card } from '@material-ui/core'

function ArticleCard(props) {
    return (
      <React.Fragment >
        <Card style={styles.paper}>
          <Grid container direction='row' alignItems='center' justify='space-evenly'>
            <Grid item xs={4}>
              <CardMedia
                component='img'
                image={props.article.urlToImage ? props.article.urlToImage : './logo.png'}
                title='Eco - Traveller'
                style={{ width: '60%' }}
              />
            </Grid >
            <Grid item xs={8}>
              <Typography variant='h5'>{props.article.title}</Typography>
              <Typography variant='subtitle1'>Author: {props.article.author}</Typography>
              <Typography variant='subtitle2'>Source: {props.article.source.name}</Typography >
              <Typography variant='body2'>Content: {props.article.content ? props.article.content : props.article.description}</Typography>
              <a id='articlelink'
                href={props.article.url}
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

export default ArticleCard
