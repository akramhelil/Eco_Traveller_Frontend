import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Paper from '@material-ui/core/Paper'




function PictureFrame() {

    return (
      <React.Fragment >
        <Paper>
          <Carousel autoPlay showThumbs={false} infiniteLoop
            verticalSwipe='natural' >

            <div >
              <img alt='Amur_Leopard' src='./Amur_Leopard.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Amur_leopard'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Amur Leopard</a>
            </div>
            <div >
              <img alt='Vaquita' src='./Vaquita.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Vaquita'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Vaquita </a>
            </div>
            <div >
              <img alt='Sea-Turtle' src='./sea-turtle.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Sea_turtle'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Sea Turtle </a>
            </div>
            <div >
              <img alt='Tiger' src='./tiger.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Tiger'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Tiger </a>
            </div>
            <div >
              <img alt='Rhino' src='./rhino.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Rhinoceros'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Rhinoceros </a>
            </div>
            <div >
              <img alt='Orangutans' src='./Orangutans.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Orangutans'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Orangutans </a>
            </div>

            <div >
              <img alt='Gorilla' src='./gorilla.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Gorilla'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Gorilla </a>
            </div>
            <div >
              <img alt='Elepgant' src='./elephant.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Sumatran_elephant'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Sumatran Elephant </a>
            </div>
            <div >
              <img alt='saolahighres' src='./saolahighres.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Saola'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Saola</a>
            </div>
            <div >
              <img alt='Pangolins' src='./pangolins.jpg' />
              <a className='legend' id='animals'
                href='https://en.wikipedia.org/wiki/Pangolins'
                target='_blank' rel='noopener noreferrer'
                style={{ fontSize: 25, textDecoration: 'none' }}>Endangered Amimals in 2019 - Pangolins</a>
            </div>
          </Carousel>
        </Paper>
      </React.Fragment>
    )
}



export default PictureFrame