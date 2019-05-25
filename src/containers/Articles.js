import React from 'react'
import { articles } from '../articleData'
import ArticleCard from '../components/ArticleCard'
function Articles () {
  console.log(articles)
  return (
    <React.Fragment>
      {
        articles.slice(0, 5).map(article => {
          return <ArticleCard article={article} key={article.author.slice(0, 4)} />
        })
      }
    </React.Fragment>
  )
}

export default Articles
