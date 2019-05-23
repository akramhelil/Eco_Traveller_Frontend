import React, { Component } from 'react'
import { connect } from 'react-redux'

class Trips extends Component {
    state = {
    trips: []
    }



    render() {
    //   console.log(this.props.currentTraveller['trips'])
        return (
            <React.Fragment>
            <div>
                {this.props.currentTraveller ? 
                        <div>
                            {this.props.currentTraveller['trips'].map((trip) => {
                                return <h1 key={trip.id}>{trip.name}</h1>
                         })}
                         </div>
              : <h1>Loading....</h1>
        }
        </div>
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
