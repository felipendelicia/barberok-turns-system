import React from 'react'

import config from '../../config'

const Landing = () => {
  return (
    <div className="landing-container">
      <img src={config.imgURL.landingImage}/>
    </div>
  )
}

export default Landing