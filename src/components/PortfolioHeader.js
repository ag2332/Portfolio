import React from 'react'
import portfolioImg from '../assets/images/portfolio.svg'
import Grid2 from './atoms/Grid2'
import Buttons from './atoms/Buttons'

const PortfolioHeader = () => {
  return (
    <Grid2 className="container portfolio-page">
      <div className="portfolio-header-text">
        <h1>Portfolio</h1>
        <h2>
          Please scroll to see my list of projects below. Each one has a provided
          desciprition and is linked to my Github. If you like what you see,
          reach out to me using the button below.
        </h2>
        <Buttons />
      </div>
      <div className="img-container">
        <img className="grid-img" src={portfolioImg} alt="portfolio" />
      </div>
    </Grid2>
  )
}

export default PortfolioHeader
