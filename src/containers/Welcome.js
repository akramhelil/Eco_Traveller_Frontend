import React from 'react'
import PostDeck from '../components/PostDeck'
import PictureFrame from '../components/PictureFrame'
import SideBar from '../components/SideBar'
import Footer from './Footer'

function Welcome () {
  return (
    <React.Fragment>
      <PictureFrame />
      <PostDeck />
      <SideBar />
      <Footer />
    </React.Fragment>
  )
}

export default Welcome
