import React from 'react'
import LogoALarge from '../assets/images/Logo-A-Large.png'
import HomeLogo from './HomeLogo'
import Grid2 from './atoms/Grid2'
import Buttons from './atoms/Buttons'

const Home = () => {
  return (
    <Grid2 className="container portfolio-page">
      <div className="home-header-text">
        <h1>
          <span>Hi, I'm</span>
          <img className="title-logo" src={LogoALarge} alt="titleA" />
          <span>rchie</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <Buttons />
      </div>
      <div className="img-container">
        <HomeLogo />
      </div>
    </Grid2>
  )
}

export default Home
