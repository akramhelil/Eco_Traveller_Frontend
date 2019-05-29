import React from 'react'
import { ArticlesArr } from '../articleData'
import ArticleCard from '../components/ArticleCard'
import { Grid } from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component'
// import Spinner from 'react-spinner-material'
import Loader from 'react-loader-spinner'

export default class Articles extends React.Component {

  state = {
    hasMore: true, 
    startIndex: 0
  }

  fetchData = () => {
    if (this.displayArticles(this.state.startIndex).length < ArticlesArr.length) {
      setTimeout(() => {
        this.setState({
          startIndex: this.state.startIndex + 5
        })
      }, 1500)
    }else if (this.displayArticles(this.state.startIndex).length  =  ArticlesArr.length) {
      this.setState({
        hasMore: false
      })
    }
  }

  displayArticles = (startIndex) => {
    // console.log(this.state.startIndex)
    return ArticlesArr.slice(0, startIndex + 5)
  }
  
  render() {

    // console.log(this.state.startIndex)
    // console.log(ArticlesArr.length)
    // console.log(this.state.hasMore)
    // console.log(this.displayArticles(this.state.startIndex).length)
    return (
      <React.Fragment>
        <Grid container>
          <InfiniteScroll
            dataLength={this.displayArticles(this.state.startIndex).length}
            next={this.fetchData}
            hasMore={this.state.hasMore}
            loader={
                <div className='signup'>
                  <Loader 
                  type="Puff"
                  color="#4CAF50"
                  height="100"	
                  width="100" />
              </div>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            } >
        
            {
              this.displayArticles(this.state.startIndex).map(article => {
                return <ArticleCard article={article} key={Math.random()} />
              })
            }
          </InfiniteScroll>
        </Grid>
      </React.Fragment>
    )
  }
}
