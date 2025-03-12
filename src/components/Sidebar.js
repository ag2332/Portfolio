import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoA from '../assets/images/Logo-A.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="nav-logo" to="/">
        <img src={LogoA} alt="logo A" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <i className="fa fa-house-user"></i>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <i className="fa fa-address-card"></i>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <i className="fa-solid fa-briefcase"></i>
        </NavLink>
        <a
          href="https://www.linkedin.com/in/archie-george-41a116356"
          target="_blank"
          rel="noreferrer"
          className="linkedin-link"
        >
          <i className="fa-brands fa-linkedin"/>
        </a>
        <a
          href="https://github.com/ag2332/"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          <i className="fa-brands fa-square-github"/>
        </a>
      </nav>
      <br />
    </div>
  )
}

export default Sidebar
