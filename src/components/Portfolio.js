import React from 'react'
import LogoALarge from '../assets/images/Logo-A-Large.png'
import Grid2 from './atoms/Grid2'
import ESimg from '../assets/images/EspressoSync-logo.png'


const Portfolio = () => {
  const cardData = [
    {
      id: 1,
      title: 'EspressoSync',
      description: 'Track and manage your caffeine intake.',
      Header1: 'Features:',
      list1: `<ul>
                    <li>Log daily consumption (coffee, tea, energy drinks, etc.).</li>
                    <li>Secure login and account management with Firebase.</li>
                    <li>Monitor habits with charts and summaries.</li>
                    <li>Access data from any device with Firebase storage.</li>
                    <li>Optimized for desktop and mobile.</li>
                </ul>`,
      Header2: 'Tech Stack:',
      list2: `<ul>
                    <li>Frontend: Vite.</li>
                    <li>Backend: Firebase (authentication, real-time database).</li>
                </ul>`,
      image: ESimg,
      url: "https://github.com/ag2332/EspressoSync"
    },
    {
      id: 2,
      title: 'ZenFusion',
      description: 'Asian-fusion restaurant website with booking feature',
      Header1: 'Features:',
      list1: `<ul>
                    <li>Responsive Design: Optimized for both desktop and mobile devices.</li>
                    <li>Interactive Menu: Dynamic display of dishes with detailed descriptions.</li>
                    <li>Online Reservation: Allows users to easily reserve a table online.</li>
                    <li>Visual Design: Sleek, modern design showcasing the restaurant's ambiance.</li>
                    <li>Easy Navigation: User-friendly interface for quick access to key information.</li>
                </ul>`,
      Header2: 'Tech Stack:',
      list2: `<ul>
                    <li>Frontend: React.</li>
                    <li>Design: Figma for UX, Headless UI for UI.</li>
                </ul>`,
      image: LogoALarge,
      url: "https://github.com/ag2332/ZenFusion"
    },
    {
      id: 3,
      title: 'Website 3',
      description: 'Website 3, to be filled later',
      Header1: 'Features:',
      list1: `<ul>
                    <li>Responsive Design: Optimized for both desktop and mobile devices.</li>
                    <li>Interactive Menu: Dynamic display of dishes with detailed descriptions.</li>
                    <li>Online Reservation: Allows users to easily reserve a table online.</li>
                    <li>Visual Design: Sleek, modern design showcasing the restaurant's ambiance.</li>
                    <li>Easy Navigation: User-friendly interface for quick access to key information.</li>
                </ul>`,
      Header2: 'Tech Stack:',
      list2: `<ul>
                    <li>Frontend: React.</li>
                    <li>Design: Figma for UX, Headless UI for UI.</li>
                </ul>`,
      image: LogoALarge,
      url:""
    },
  ]

  function PortfolioCard({
    id,
    title,
    description,
    Header1,
    list1,
    Header2,
    list2,
    image,
    url
  }) {
    return (
      <Grid2 className="container portfolio-page">
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <h2>{Header1}</h2>
          <div
            className="list-container"
            dangerouslySetInnerHTML={{ __html: list1 }}
          ></div>
          <h2>{Header2}</h2>
          <div
            className="list-container"
            dangerouslySetInnerHTML={{ __html: list2 }}
          ></div>
        </div>
        <div className="portfolio-container">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img className="grid-img" src={image} alt="portfolio-img"/></a>
        </div>
      </Grid2>
    )
  }

  return (
    <div>
      {cardData.map((item, key) => {
        console.log(item)
        const {
          id,
          title,
          description,
          Header1,
          list1,
          Header2,
          list2,
          image,
          url
        } = item
        return (
          <PortfolioCard
            key={key}
            id={id}
            title={title}
            description={description}
            Header1={Header1}
            list1={list1}
            Header2={Header2}
            list2={list2}
            image={image}
            url={url}
          />
        )
      })}
    </div>
  )
}

export default Portfolio
