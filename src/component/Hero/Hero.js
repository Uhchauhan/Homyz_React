
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import img2 from "./hero-image.png"

import { HiLocationMarker } from "react-icons/hi";

import CountUp from "react-countup"

import { motion } from 'framer-motion'

import "./Hero.css"



const Hero = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

    return (
        <section className="hero-wrapper">

            <div className="paddings innerWidth flexCenter hero-container">

                {/* left section */}

                <div className="flexColStart hero-left">

                    <div className="hero-title">

                        <div className="hero-cicle" />

                        <h1 data-aos="fade-right" data-aos-delay="200">
                            Discover <br />
                            Most Suitable <br /> Property
                        </h1>

                    </div>

                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Find a carirty of Properties that suit you very easilty</span>
                        <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">Search </button>
                    </div>



                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={880000} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premiun Products</span>
                        </div>


                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>


                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award Winnings</span>
                        </div>

                    </div>

                </div>




                {/* right section  */}

                <div className="flexCenter hero-right">
                    <div className="image-container" data-aos="fade-left" data-aos-delay="300">
                        <img src={img2} alt="" />
                    </div>
                </div>

            </div>

        </section>
    )



}

export default Hero;
