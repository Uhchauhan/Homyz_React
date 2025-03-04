
import React, { useState,  useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "./logo.png"

import "./Header.css"

import { BiMenuAltRight } from "react-icons/bi";

// import OutsideClickHandler from "react-outside-click-handler"



const Header = () => {

    const [menuOpened, setmenuOpened] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

    const getMenuStyles = (menuOpened) => {

        if (document.documentElement.clientWidth <= 800) {
            return {right: !menuOpened && "100%" }
        }
    }

    return (

        <div>

            <section className="h-wrapper">

                <div className="flexCenter paddings innerWidth h-container">

                    <img src={img1} alt="logo" width={100} data-aos="zoom-in" data-aos-delay="200"/>
{/* 
                     <OutsideClickHandler onOutsideClick={()=>{
                        setmenuOpened(false)}}> */}

                        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>

                            <a href="" data-aos="zoom-in" data-aos-delay="400">Residencies</a>
                            <a href="" data-aos="zoom-in" data-aos-delay="500">Our Value</a>
                            <a href="" data-aos="zoom-in" data-aos-delay="600">Contact Us</a>
                            <a href="" data-aos="zoom-in" data-aos-delay="700">Get Started</a>

                            <button className="button" data-aos="zoom-in" data-aos-delay="800">
                                <a href="">Contact</a>
                            </button>
                        </div>

                    {/* </OutsideClickHandler> */}
                    

                    <div className="menu-icon" onClick={() => setmenuOpened((prev) => !prev)}>
                        <BiMenuAltRight size={30} />
                    </div>

                </div>

            </section>

        </div>
    )

}


export default Header;







