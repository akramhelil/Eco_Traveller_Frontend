import React, { Component } from 'react'
import { connect } from 'react-redux'
import TripCard from './TripCard'
import Grid from '@material-ui/core/Grid'

class Trips extends Component {
  render () {
    // console.log(this.props)
    return (
      <React.Fragment>
        <Grid container
          direction='column'
          justify='center'
          alignItems='center'>
          {this.props.currentTraveller
            ? <div>
              {this.props.currentTraveller.trips.map((trip) => {
                return this.props.currentTraveller.posts.map((post) => {
                  return trip.id === post.trip_id ? <TripCard trip={trip} post={post} key={Math.random()} /> : null
                })
              })}
            </div>
            : <h1>Loading....</h1>
          }
        </Grid>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentTraveller: state.currentTraveller
  }
}
export default connect(mapStateToProps)(Trips)
