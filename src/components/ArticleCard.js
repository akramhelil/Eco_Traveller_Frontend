import React from 'react'
import Paper from '@material-ui/core/Paper'
import { styles } from '../style/MateilizeStyle'
import Grid from '@material-ui/core/Grid'
// import { Link } from 'react-router-dom'
import { Link } from '@material-ui/core/Link'
// Link
class ArticleCard extends React.Component {
  render () {
    return (
      <React.Fragment >
        <div>

          <Grid container>
            <Paper>
              <img src={this.props.article.urlToImage} alt='article-info' width='250' />
              <h1>{this.props.article.title}</h1>
              <h2>Author: {this.props.article.author}</h2>
              <h3>Source: {this.props.article.source.name}</h3>
              <p>Source: {this.props.article.content ? this.props.article.content : this.props.article.description}</p>
              <a id='articlelink'
                href={this.props.article.url}
                target='_blank' rel='noopener noreferrer'>
                <h3>
               Read More ...
                </h3>
              </a>
            </Paper>
          </Grid >
        </div>
      </React.Fragment >
    )
  }
}

export default ArticleCard
