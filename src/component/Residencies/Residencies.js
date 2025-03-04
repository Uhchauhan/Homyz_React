

// import React from "react";

// import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

// import 'swiper/css';

// import "./Residencies.css"

// import data from "../../utlis/slider.json"

// import { sliderSettings } from "../../utlis/common";

// const Residencies = () => {

//     return(

//         <section className="r-wrapper">
//             <div className="paddings innerWidth r-container">
//                 <div className="r-head flexColStart">
//                     <span className="orangeText">Best Choices</span>
//                     <span className="primaryText">Popular Residencies</span>
//                 </div>

//                 <Swiper {...sliderSettings}>
//                     <SliderButtons />
//                     {
//                         data.map((card, i)=> (
//                             <SwiperSlide key={i}>
//                                 <div className="flexColStart r-card">
//                                 <img src={require(`${card.image}`)} alt="home" />

//                                     <span className="secondaryText r-price">
//                                         <span style={{color: "orange"}}>$<span>    
//                                         </span>{card.price}</span>
//                                     </span>

//                                     <span className="primaryText">{card.name}</span>
//                                     <span className="secondaryText">{card.detail}</span>

//                                 </div>
//                             </SwiperSlide>
//                         ))
//                     }
//                 </Swiper>

//             </div>
//         </section>

//     )
// };

// export default Residencies




// const SliderButtons = () => {

//     const swiper = useSwiper()

//     return(
//         <div className="flexCenter r-buttons">
//             <button className="pad" onClick={() =>swiper.slidePrev()}>&lt;</button>
//             <button className="pad" onClick={() =>swiper.slideNext()}>&gt;</button>
//         </div>
//     );
// };

















// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";


// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// import "swiper/css";

// import "./Residencies.css";

// import data from "../../utlis/slider.json";

// import { sliderSettings } from "../../utlis/common";

// const Residencies = () => {

//     useEffect(() => {
//         AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
//     }, []);

//     return (
//         <section className="r-wrapper">
//             <div className="paddings innerWidth r-container">
//                 <div className="r-head flexColStart">
//                     <span className="orangeText">Best Choices</span>
//                     <span className="primaryText">Popular Residencies</span>
//                 </div>

//                 <Swiper {...sliderSettings} className="responsive-swiper">
//                     <SliderButtons />
//                     {data.map((card, i) => (
//                         <SwiperSlide key={i}>
//                             <div className="flexColStart r-card">
//                                 <img src={require(`${card.image}`)} alt="home" loading="lazy" />

//                                 <span className="secondaryText r-price">
//                                     <span style={{ color: "orange" }}>${card.price}</span>
//                                 </span>
//                                 <span className="primaryText">{card.name}</span>
//                                 <span className="secondaryText">{card.detail}</span>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </section>
//     );
// };

// export default Residencies;

// const SliderButtons = () => {
//     const swiper = useSwiper();
//     return (
//         <div className="flexCenter r-buttons">
//             <button className="pad" onClick={() => swiper.slidePrev()}>
//                 &lt;
//             </button>
//             <button className="pad" onClick={() => swiper.slideNext()}>
//                 &gt;
//             </button>
//         </div>
//     );
// };



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import "./Residencies.css";

import data from "../../utlis/slider.json";
import { sliderSettings } from "../../utlis/common";

const Residencies = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS for animations
    }, []);

    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                {/* Section Header with Animation */}
                <div className="r-head flexColStart" data-aos="fade-up">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings} className="responsive-swiper">
                    <SliderButtons />
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card" data-aos="zoom-in" data-aos-delay={`${i * 200}`}>
                                <img src={require(`${card.image}`)} alt="home" loading="lazy" />

                                <span className="secondaryText r-price">
                                    <span style={{ color: "orange" }}>${card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons" data-aos="fade-up">
            <button className="pad" onClick={() => swiper.slidePrev()}>
                &lt;
            </button>
            <button className="pad" onClick={() => swiper.slideNext()}>
                &gt;
            </button>
        </div>
    );
};
