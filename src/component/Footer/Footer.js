
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import "./Footer.css"

import img1 from "./logo2.png"


const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS for animations
    }, []);

    return (
        <section className="f-wrapper">

            <div className="paddings innerWidth flexCenter f-container">

                {/* left side */}

                <div className="flexColStart f-left" data-aos="zoom-in" data-aos-delay="200">
                    <img src={img1} alt="logo" width={120} />

                    <span className="secondaryText" data-aos="zoom-in" data-aos-delay="200">
                        Our vision is to make all people<br />
                        the best place to live for them.
                    </span>
                </div>

                {/* right side */}

                <div className="flexColStart f-right">
                    <span className="primaryText" data-aos="zoom-in" data-aos-delay="200">Information</span>
                    <span className="secondaryText" data-aos="zoom-in" data-aos-delay="200">145 New york, FL 4571, USA</span>

                    <div className="flexCenter f-menu">
                        <span  data-aos="zoom-in" data-aos-delay="200">Property</span>
                        <span  data-aos="zoom-in" data-aos-delay="300">Services</span>
                        <span  data-aos="zoom-in" data-aos-delay="400">Product</span>
                        <span  data-aos="zoom-in" data-aos-delay="500">About Us</span>
                    </div>
                </div>

            </div>

        </section>
    )
};


export default Footer