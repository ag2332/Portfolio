import React from 'react'
import Grid2 from './atoms/Grid2'
import Buttons from './atoms/Buttons'
import info from '../assets/images/info.svg'

const About = () => {
  return (
    <Grid2 className="container portfolio-page">
      <div className="about-header-text">
        <h1>About me</h1>
        <p>
          Hi there, my name is Archie and I'm a 22 year old full stack developer
          looking for a role in a company where I can grow and learn. I am
          incredibly passionate about UX & UI and throughly enjoy bulding user-focused
          applications.
        </p>
        <p>
          As a junior full stack developer, I embrace growth through both
          successes and mistakes. I welcome feedback and see it as key to
          improving my skills. With a mindset of continuous learning, I seek
          opportunities to expand my knowledge and tackle new challenges.
          <br/>
          I view mistakes as valuable lessons and prioritise collaboration and
          communication to contribute to team goals while growing individually.
        </p>
        <p>
          Outside of coding, I enjoy weightlifting for focus
          and discipline, and have a strong interest in finance, learning about
          markets and investment strategies.
          <br/>
          These hobbies keep me balanced and
          inspire my approach to problem-solving and self-improvement.
        </p>
        <Buttons />
      </div>
      <div className="img-container">
        <img className="grid-img" src={info} alt="info" />
      </div>
    </Grid2>
  )
}

export default About
