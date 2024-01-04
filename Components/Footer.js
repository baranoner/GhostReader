import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>

      <div className='title-copyright'>
        <div className='footer-title'>GhostReader</div>
        <img className='copyright' src={process.env.PUBLIC_URL + "copyright.png"} />
      </div>
      <div className='media-logos'>
        <img src={process.env.PUBLIC_URL + "facebook.png"} />
        <img src={process.env.PUBLIC_URL + "instagram.png"} />
        <img src={process.env.PUBLIC_URL + "twitter.png"} />
        <img src={process.env.PUBLIC_URL + "linkedin.png"} />


      </div>
    </div>
  )
}
export default Footer