import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { DateFormatInput } from 'material-ui-next-pickers'
import Paper from '@material-ui/core/Paper'
// import { styles } from '../style/MateilizeStyle'
import { adapter } from '../adapter';
import { connect } from 'react-redux'

const loginStyle = {
  margin: 20,
  paddingLeft: 80,
  paddingTop: 40,
  paddingBottom: 20,
  paddingRight: 80
} 
 class NewTrip extends Component {

   state = {
      date: '',
     name: ''
    }

  changeHandlerDate = (date) => {
        // console.log('Date: ', date)
    this.setState({date})
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    const newTrip = {
      traveller_id: this.props.currentTraveller.id,
      date: this.state.date,
      name: this.state.name
   }
    adapter.createTrip(newTrip)
      .then(response => this.setCurrentTrip(response))
  }
  changeHandler = (e) => {
    if (e.target.name === 'name') {
      this.setState({
        name: e.target.value
      })
    }
  }
   setCurrentTrip = (response) => {
    //  console.log("Set Current Trip", response.trip)
    this.props.dispatch({type: 'NEW_TRIP',payload: response.trip})
        // go back to the main page
     this.props.history.push(`/`)
   }

  render () {
    const { date } = this.state
    // console.log("NEW TRIP STATE",this.state)
    // console.log("NEW TRIP PROPS",this.props)
    return (
      <React.Fragment>
        <Grid container justify='center' alignItems='center' >
          <div className="signup">
            <Paper style={loginStyle}>
              <h2>Hello! {this.props.currentTraveller.first_name} Let's Setup Your Trip </h2>
              <form onSubmit={this.handleSubmit}>
                <TextField label='Trip Name:'
                  name='name' style={{ margin: 30 }}
                  onChange={this.changeHandler} />
                <DateFormatInput name='date'
                  value={date}
                  onChange={this.changeHandlerDate}
                  style={{ margin: 30 }} />
                <input className="button" type="submit" style={{margin: 30}}/>
              </form>
            </Paper>  
          </div>
        </Grid>
      </React.Fragment>
    )
  }
 }

 function mapStateToProps(state) {
  // console.log(state.currentTraveller)
  return {
    currentTraveller: state.currentTraveller,
    currentTrip: state.currentTrip
  }
}

export default connect(mapStateToProps)(NewTrip)
