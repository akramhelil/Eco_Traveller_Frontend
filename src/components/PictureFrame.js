import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Paper from '@material-ui/core/Paper'
export default class PictureFrame extends Component {
  render () {
    return (
      <React.Fragment >
        <Paper>
          <Carousel autoPlay showThumbs={false} infiniteLoop >
            <div>
              <img alt='cats' src='https://s3-ap-northeast-1.amazonaws.com/peatix-files/event/596274/cover-hu7g6w2kH9S5D23X9tSgQDLYCHZoYoWb.jpeg' />
              <p className='legend'>Legend 1</p>
            </div>
            <div>
              <img alt='cats' src='http://www.cityofimages.net/wp-content/uploads/2014/05/CI-Powerful_Owl_CloseUp_EHSS_IMG_9590-920x450.jpg' />
              <p className='legend'>Legend 2</p>
            </div>
            <div>
              <img alt='cats' src='http://www.vuyanilodge.com/safariblog/wp-content/uploads/img_3626-920x450.jpg' />
              <p className='legend'>Legend 2</p>
            </div>
          </Carousel>
        </Paper>
      </React.Fragment>
    )
  }
}
