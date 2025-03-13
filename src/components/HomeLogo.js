import React from "react";
import LogoS from "../assets/images/LogoS.png";

const HomeLogo = () => {

    return (
        <div className="logo-container" onClick={resetLogo}>
            <img className="logo-img" src={LogoS} alt="Logo" />
        </div>
    )
}

export default HomeLogo;