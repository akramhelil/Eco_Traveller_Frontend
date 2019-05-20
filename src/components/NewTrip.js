import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { DateFormatInput } from 'material-ui-next-pickers'
import Paper from '@material-ui/core/Paper'
// import { styles } from '../style/MateilizeStyle'
import { adapter } from '../adapter';

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
      title: '', 
      // this current trip will be pulled from Redux currentTrtip
      currentTrip: null
    }

  changeHandlerDate = (date) => {
        // console.log('Date: ', date)
    this.setState({date})
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    adapter.createTrip(this.state)
      .then(console.log)
    // SetState for the Current user via Redux
      this.props.history.push(`/`)
  }
  changeHandler = (e) => {
    if (e.target.name === 'name') {
      this.setState({
        title: e.target.value
      })
    }
  }

  render () {
    const { date } = this.state
    console.log(this.state)
    return (
      <React.Fragment>
        <Grid container justify='center' alignItems='center' >
          <div className="signup">
            <Paper style={loginStyle}>
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


export default NewTrip
