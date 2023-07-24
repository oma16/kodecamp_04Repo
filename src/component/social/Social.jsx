import React from 'react'
import './social.css'
import company from '../../assets/icon-company.svg'
import location from '../../assets/icon-location.svg'
import companyw from '../../assets/icon-company-w.svg'
import locationw from '../../assets/icon-location-w.svg'
import twitter from '../../assets/icon-twitter.svg'
import website from '../../assets/icon-website.svg'
import twitterw from '../../assets/icon-twitter-w.svg'
import websitew from '../../assets/icon-website-w.svg'

const Social = ({modeChg, obj}) => {
  return (
    <div className='card-social'>
    <div>
    <div className={modeChg ? 'location' : 'location1'}>
      <img src={modeChg ? locationw : location} alt='location-icon' />
      <p className='user'>{obj.location === null ? 'Not Available' : obj.location} </p>
    </div>
    <div className={modeChg ? 'location' : 'location1'}>
    <img src={modeChg ? websitew : website} alt='website-icon' />
    <p className='user'>{obj.blog === "" ? 'Not Available' : obj.blog}</p>
    </div>
    </div>
   <div>
   <div className={modeChg ? 'location' : 'location1'}>
      
      <img src={modeChg ? twitterw : twitter} alt='twitter-icon' />
      <p className='user'>{obj.twitter_username === null ? 'Not Available' : obj.twitter_username}</p>
    </div>
    <div className={modeChg ? 'location' : 'location1'}>
      <img src={modeChg ? companyw : company } alt='company-icon' />
      <p className='user'>{obj.company === null ? 'Not Available' : obj.company}</p>
     
    </div>
   </div>
  </div>
  )
}

export default Social
