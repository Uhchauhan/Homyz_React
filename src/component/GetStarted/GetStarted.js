
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import "./GetStarted.css"

const GetStarted = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS for animations
    }, []);

    return(
        <section className="g-wrapper" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get Started with Homyz</span>
                    <span className="secondaryText">Subscribe and find super attractive price quotes
                    <br />Find your residence soon</span>
                    <button className="button">
                        <a href="">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted