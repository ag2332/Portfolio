import React, { useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import portfolioImg from "../assets/images/portfolio.svg";
import Grid2 from "./atoms/Grid2";
import Buttons from "./atoms/Buttons";

const PortfolioHeader = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <Grid2 className="container portfolio-page">
            <div className="portfolio-header-text">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                    idx={15}
                    />
                </h1>
                <h2>
                    Please see my list of projects below. Each one has a provided desciprition and is linked to my github. If you like what you see, reach out to me using the button below.
                </h2>
                <div>

                </div>
                <Buttons/>
            </div>
            <div className="img-container">
                <img className="grid-img" src={portfolioImg} alt="portfolio image" />
            </div>
        </Grid2>
    );
}

export default PortfolioHeader;