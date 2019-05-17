import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { DateFormatInput } from 'material-ui-next-pickers'

export default class NewTrip extends Component {

    state = {
        date: ''
    }

    onChangeDate = (date:Date) => {
        console.log('Date: ', date)
        this.setState({date})
      } 
  render () {
    const { date } = this.state
    return (
      <React.Fragment>
            <Grid container justify='center' alignItems='center' >
            <form onSubmit={this.handleSubmit}>
                <TextField label='Trip Name:' name='name' style={{margin: 30}}/>
                <DateFormatInput name='date' value={date} onChange={this.onChangeDate} style={{margin: 30}}/>
                <input className="button" type="submit"style={{margin: 30}}/>
            </form>
        </Grid>

      </React.Fragment>
    )
  }
}
