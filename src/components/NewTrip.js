import React, { Component } from 'react'
import{ TextField, Typography, Grid, Paper }from '@material-ui/core'
import { DateFormatInput } from 'material-ui-next-pickers'
import { adapter } from '../adapter';
import { connect } from 'react-redux'
import Spinner from 'react-spinner-material';

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

   componentDidMount() {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token')
      adapter.autoLogin(token)
        .then(traveller => this.props.dispatch({ type: 'AUTO_LOGIN', payload: traveller }))
    }
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
     window.location.reload(false); 
   }

  render () {
    const { date } = this.state
    return (
      <React.Fragment>
        {this.props.currentTraveller ?
          <Grid container justify='center' alignItems='center' >
            <div className="signup">

              <Grid item sm={12} >
                <img src='./main_page_logo.png' alt='logo' width='30%' />
              </Grid>
              <Paper style={loginStyle}>
                <Typography varitant='h6'>Hello! {this.props.currentTraveller.first_name} Let's Setup Your Trip </Typography>
                <form onSubmit={this.handleSubmit}>
                  <TextField label='Trip Name:'
                    name='name' style={{ margin: 30 }}
                    onChange={this.changeHandler} />
                  <DateFormatInput name='date'
                    value={date}
                    onChange={this.changeHandlerDate}
                    style={{ margin: 30 }} />
                  <input className="button" type="submit" style={{ margin: 30 }} />
                </form>
              </Paper>
            </div>
          </Grid> :
          <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
        }
      </React.Fragment>
    )
  }
 }

 function mapStateToProps(state) {
  // console.log(state.currentTraveller)
  return {
    currentTraveller: state.currentTraveller,
  }
}

export default connect(mapStateToProps)(NewTrip)
