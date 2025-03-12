import React from "react";
import Portfolio from "../Portfolio";
import PortfolioHeader from "../PortfolioHeader";

const PortfolioPage = () => {
    return (
        <div className="scroll-style">
            <PortfolioHeader/>
            <Portfolio />
        </div>
    );
}

export default PortfolioPage;