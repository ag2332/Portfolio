import React, { useState } from "react";
import LogoALarge from "../assets/images/Logo-A-Large.png"
import AnimatedLetters from "./AnimatedLetters";
import HomeLogo from "./HomeLogo";
import Grid2 from "./atoms/Grid2";
import Buttons from "./atoms/Buttons";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r','c','h','i','e',',']
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r']

    return (
        <Grid2 className="container portfolio-page">
            <div>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img className="title-logo" src={LogoALarge} alt="titleA" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend/React Developer</h2>
                <Buttons/>
            </div>
            <div className="img-container">
                <HomeLogo/>
            </div>
        </Grid2>
    )
}

export default Home;