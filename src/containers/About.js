import React from 'react'
import '../style/style.css'
import Typography from '@material-ui/core/Typography'
function About () {
  return (
    <div className='text-container' >
      <Typography variant='h3'>Our Story</Typography>
      <hr />
      <Typography variant='h5' style={{ padding: 10, margin: 100 }}>
        <p>The world is getting smaller and smaller. This planet has been carried us over from all the crazy moments throughout the histories.
        Ecotourism is responsible travel to natural areas that conserves the environment and sustains the well-being of local people.
        Our joint mission is to inspire people over the world to understand our planet - and the challenges it faces. If we can truly understand why nature matters to us all, and what we can do to save it, then we can create a future where nature and people thrive.
        </p>
        <p>
        This platform will provide a space for sharing your journey with the world, and understand what type of damage that our planet has been facing, and we encourage our travelers to share their stories through the camera, that can create awareness of what have you seen on your travel journey, good and bad.If we can truly understand why nature matters to us all, and what we can do to save it, then we can create a future where nature and people thrive.
        </p>
      </Typography >
      <hr />
    </div>
  )
}

export default About
