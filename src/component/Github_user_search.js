import React, { useState } from 'react'
import './Github_user_search.css'
import company from '../assets/icon-company.svg'
import location from '../assets/icon-location.svg'
import moon from '../assets/icon-moon.svg'
import search from '../assets/icon-search.svg'
import sun from '../assets/icon-sun.svg'
import usr from '../assets/usrImg.png'
import twitter from '../assets/icon-twitter.svg'
import website from '../assets/icon-website.svg'
import axios from 'axios'



const TimeTracking = () => {
  const [searchInput, setSearchInput] = useState('');
  const [modeChg, setModechg] = useState(true)
  const [error, setError] = useState(false)

  //default values to display 
  const [obj, setObj] = useState({
    // avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    avatar_url: '',
    login: 'octocat',
    name: 'The octocat',
    bio: 'this profile has no bio',
    location: 'San Fransico',
    public_repos: 8,
    followers: 9810,
    following: 9,
    company: '@github',
    twitter_username: 'null',
    blog: 'https://github.blog',
    created_at: '2011-01-25T18:44:36Z'
  })

  // getting the infomation with api 
  const getData = () => {
    const url = `https://api.github.com/users/${searchInput}`
    axios.get(url).then(res => {
      setObj(Object.assign({}, res.data)) 
      setError(false)
    }).catch(err => {
      console.log('no result')
      setError(true)
    })
  }

  // console.log(obj)

  // funtions


  const handlesearch = (e) => {
    setSearchInput(e.target.value)
  }

  const fucMoon = () => {
    setModechg(!modeChg)
  }

  modeChg? document.body.className = 'dark' : document.body.className = 'light'

  return (
    <>
      <div className='container'>
        <div className={modeChg ? 'nav navOff' : 'nav navOn'}>
          <h3>devfinder</h3>
          <div onClick={fucMoon} >
            <span>{modeChg ? 'LIGHT' : 'DARK'}</span>
            <img src={modeChg ? sun : moon} alt='dark moon icon' />
          </div>
        </div>

        <div className={modeChg ? 'search searchOff' : 'search searchOn'} >
          <div>
            <img src={search} alt='search-icon' />
            <span>
              <input type='text' placeholder='search Github username...' onChange={handlesearch}  ></input>
              <span className={error? 'error':'no-error'}>no result</span>
            </span>
          </div>
          <button onClick={getData}>search</button>

        </div>

        <div className={modeChg ? 'card cardOff' : 'card cardOn'}>
          <div className='card-header'>
            <div className='bio'>
              <div>
                <img src={obj.avatar_url || usr} alt='user profile pic' />
              </div>

              <div>
                <h2>{obj.name || obj.login}</h2>
                <h3>@{obj.login}</h3>
                <h4>{obj.bio}</h4>
              </div>

            </div>

            <div>
              <span>joined 25 jan 2011</span>
            </div>
          </div>

          <div className='address' >
            <div className={modeChg ? 'card-follow card-followOff' : 'card-follow card-followOn'}>
              <div className='follow '>
                <span>repo</span>
                <span>{obj.public_repos}</span>
              </div>
              <div className='follow '>
                <span>followers</span> <br />
                <span>{obj.followers}</span>
              </div>
              <div className='follow '>
                <span>following</span> <br />
                <span>{obj.following}</span>
              </div>

            </div>

            <div className='card-social'>
              <div>
                <img src={location} alt='location-icon' />
                <span>{obj.location} </span>
              </div>
              <div>
                <img src={twitter} alt='twitter-icon' />
                <span>{obj.twitter_username} </span>
              </div>
              <div>
                <img src={website} alt='website-icon' />
                <span>{obj.blog} </span>
              </div>
              <div>
                <img src={company} alt='company-icon' />
                <span>{obj.company}</span> <br />
                <span>{(new Date(obj.created_at).getMonth())}  {(new Date(obj.created_at).getDay())} {(new Date(obj.created_at).getFullYear())} </span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default TimeTracking