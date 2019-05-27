import React from 'react'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { articles } from '../articleData'
import FrontPageArticle from './FrontPageArticle'

const shuffledArticles = articles.sort(() => 0.5 - Math.random())
let selectedArticles = shuffledArticles.slice(0, 8)
// console.log(articles)
class MostVisited extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Grid container direction='row' alignItems='center' justify='space-evenly' style={{ margin: 20 }}>
          <Grid item xs={12}>
            <div className='signup'>
              <Typography component='h5' variant='h5' >
              Recomended Articles
              </Typography>
            </div>
          </Grid>
          {selectedArticles.map((article) => <FrontPageArticle key={Math.random()} article={article} />)}
        </Grid>
      </React.Fragment>
    )
  }
}
export default MostVisited
