import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
// import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import { styles } from '../style/MateilizeStyle'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { connect } from 'react-redux'

class PostCard extends React.Component {
  handleSad = (id) => {
    console.log('SAD FACE',id)
  }
  render () {
    return (
      <React.Fragment>
        <Grid item style={styles.postCard} xs>
            <div className="signup">
          <Card style={{ margin: 5 }}>
            <h3>{this.props.post.title.slice(0, 25)}...</h3>
            <img src={this.props.post.img_url} alt='cards' height='240' width='240' />
            <CardContent>
              <p>{this.props.post.content.slice(0, 25)}...</p>
              <IconButton onClick={()=>this.handleSad(this.props.post.id)}>
                <SentimentDissatisfiedIcon />
              </IconButton>
              <div style={{ padding: 5, fontSize: 18, display: 'inline', fontDecoration: 'bold' }}>{this.props.post.likes}</div>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <p> Trip: {this.props.post.trip.name}</p>
            </CardContent>
          </Card>
            </div>
        </Grid>
      </React.Fragment>
    )
  }
}
function mapStateToProps (state) {
  // console.log(state.currentTraveller)
  return {
    currentTrip: state.currentTrip
  }
}

export default connect(mapStateToProps)(PostCard)
