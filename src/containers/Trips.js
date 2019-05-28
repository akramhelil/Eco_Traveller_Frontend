import React, { Component } from 'react'
import { connect } from 'react-redux'
import TripCard from './TripCard'
import Grid from '@material-ui/core/Grid'
import Spinner from 'react-spinner-material'
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
            : <Spinner size={120} spinnerColor={'#333'} spinnerWidth={2} visible />
          }
        </Grid>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentTraveller: state.currentTraveller,
    login: state.login
  }
}
export default connect(mapStateToProps)(Trips)
