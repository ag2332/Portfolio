import React, { useEffect } from "react";
import LogoS from "../assets/images/LogoS.png";
import { gsap } from 'gsap-trial'
import { Draggable } from 'gsap-trial/Draggable'
import { InertiaPlugin } from 'gsap-trial/InertiaPlugin';

const HomeLogo = () => {

    const resetLogo = () => {
        const currentRotation = gsap.getProperty(".logo-img", "rotation");

        gsap.to(".logo-img", {
          rotation: currentRotation,
          x: 0,
          y: 0,
          duration: 1,
        });
      };

      useEffect(() => {
        gsap.registerPlugin(Draggable, InertiaPlugin);

        Draggable.create(".logo-img", {
          type: "rotation",
          inertia: true,
        });
      }, []);

    return (
        <div className="logo-container" onClick={resetLogo}>
            <img className="logo-img" src={LogoS} alt="Logo" />
        </div>
    )
}

export default HomeLogo;