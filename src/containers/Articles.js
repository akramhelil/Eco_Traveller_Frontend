import React from 'react'
import { articles } from '../articleData'
import ArticleCard from '../components/ArticleCard'
import { Grid } from '@material-ui/core'
function Articles () {
  return (
    <React.Fragment>
      <Grid container>
        {
          articles.slice(0, 5).map(article => {
            return <ArticleCard article={article} key={Math.random()} />
          })
        }
      </Grid>
    </React.Fragment>
  )
}

export default Articles
