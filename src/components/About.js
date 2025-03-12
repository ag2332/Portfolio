import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";
import Grid2 from "./atoms/Grid2";
import Buttons from "./atoms/Buttons";
import info from "../assets/images/info.svg"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <Grid2 className="container portfolio-page">
            <div className="about-header-text">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    Hi there, my name is Archie and I'm a 21 year old front-end developer looking for a role in a company where I can grow and learn. I am incredibly passionate about UX & UI and throughly enjoy bulding user focussed applications.
                </p>
                <p>
                    As a junior front-end developer, I understand that growth comes from both successes and mistakes. I'm always open to feedback and constructive criticism, as I believe it is an essential part of improving and refining my skills. I approach every project with a mindset of continuous learning, constantly seeking opportunities to expand my knowledge and adapt to new challenges. I'm not afraid to make mistakes because I see them as valuable lessons that help me become better at what I do. I value collaboration and communication, and I always strive to contribute to team goals while improving both individually and collectively
                </p>
                <p>
                    Outside of coding, I have a variety of interests that keep me active and engaged. I'm an avid football fan and love watching my team, Arsenal. I also enjoy lifting weights, which helps me stay focused and disciplined, both physically and mentally. Additionally, I have a strong interest in finance, constantly learning about the markets and investment strategies. These hobbies not only keep me balanced but also inspire my approach to problem-solving and continuous self-improvement.
                </p>
                <Buttons/>
            </div>
            <div className="img-container">
                <img className="grid-img" src={info} alt="info" />
            </div>
        </Grid2>
    );
}

export default About