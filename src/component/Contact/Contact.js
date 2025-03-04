
// import React from "react";

// import "./Contact.css"

// import img1 from "./contact.jpg"

// import { MdCall } from "react-icons/md"

// import { BsFillChatDotsFill } from "react-icons/bs"

// import { HiChatBubbleBottomCenter } from "react-icons/hi2"


// const Contact = () => {

//     return (

//         <section className="c-wrapper">
//             <div className="paddings innerWidth flexCenter c-container">

//                 {/* left side */}

//                 <div className="flexColStart c-left">
//                     <span className="orangeText">Our Contact</span>
//                     <span className="primaryText">Easy to Contact Us</span>
//                     <span className="secondaryText">We are always ready to help by providing the best service.<br /> We believe that a good place to live can make your life better</span>


//                     <div className="flexColStart contactModes">
//                         {/* first row */}

//                         <div className="flexStart row">
//                             <div className="flexColCenter mode">
//                                 <div className="flexStart">
//                                     <div className="flexCenter icon">
//                                         <MdCall size={25} />
//                                     </div>

//                                     <div className="flexColStart detail">
//                                         <span className="primaryText">Call</span>
//                                         <span className="secondaryText">021 123 145 14</span>
//                                     </div>
//                                 </div>
//                                 <div className="flexCenter button">Call Now</div>
//                             </div>

//                             {/* Second mode */}

//                             <div className="flexColCenter mode">
//                                 <div className="flexStart">
//                                     <div className="flexCenter icon">
//                                         <BsFillChatDotsFill size={25} />
//                                     </div>

//                                     <div className="flexColStart detail">
//                                         <span className="primaryText">Chat</span>
//                                         <span className="secondaryText">021 123 145 14</span>
//                                     </div>
//                                 </div>
//                                 <div className="flexCenter button">Chat Now</div>
//                             </div>

//                         </div>


//                         {/* Second Row */}

//                         <div className="flexStart row">
//                             <div className="flexColCenter mode">
//                                 <div className="flexStart">
//                                     <div className="flexCenter icon">
//                                         <BsFillChatDotsFill size={25} />
//                                     </div>

//                                     <div className="flexColStart detail">
//                                         <span className="primaryText">Video</span>
//                                         <span className="secondaryText">021 123 145 14</span>
//                                     </div>
//                                 </div>
//                                 <div className="flexCenter button">Video Now</div>
//                             </div>

//                             {/* Second mode */}

//                             <div className="flexColCenter mode">
//                                 <div className="flexStart">
//                                     <div className="flexCenter icon">
//                                         <HiChatBubbleBottomCenter size={25} />
//                                     </div>

//                                     <div className="flexColStart detail">
//                                         <span className="primaryText">Message</span>
//                                         <span className="secondaryText">021 123 145 14</span>
//                                     </div>
//                                 </div>
//                                 <div className="flexCenter button">Message Now</div>
//                             </div>

//                         </div>

//                     </div>
//                 </div>

//                 {/* right side */}

//                 <div className="c-right">
//                     <div className="image-container">
//                         <img src={img1} alt="logo" />
//                     </div>
//                 </div>

//             </div>
//         </section>

//     )

// };

// export default Contact;






















import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";



import "./Contact.css"

import img2 from "./contact.jpg"

import { MdCall } from "react-icons/md"

import { BsFillChatDotsFill } from "react-icons/bs"

import { HiChatBubbleBottomCenter } from "react-icons/hi2"


const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);


    return (

        <section className="c-wrapper">

            <div className="paddings innerWidth flexCenter c-container">

                {/* left side */}

                <div className="flexColStart c-left">
                    <span className="orangeText" data-aos="fade-up">Our Contact</span>
                    <span className="primaryText" data-aos="fade-up">Easy to Contact Us</span>
                    <span className="secondaryText" data-aos="fade-up">We are always ready to help by providing the best service.<br /> We believe that a good place to live can make your life better</span>


                    <div className="flexColStart contactModes">
                        {/* first row */}

                        <div className="flexStart row">

                            <div className="flexColCenter mode" data-aos="zoom-in" data-aos-delay="400">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/* Second mode */}

                            <div className="flexColCenter mode" data-aos="zoom-in" data-aos-delay="400">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>

                        </div>


                        {/* Second Row */}

                        <div className="flexStart row">

                            <div className="flexColCenter mode" data-aos="zoom-in" data-aos-delay="600">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">Video</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Now</div>
                            </div>

                            {/* Second mode */}

                            <div className="flexColCenter mode" data-aos="zoom-in" data-aos-delay="800">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* right side */}

                <div className="c-right">
                    <div className="image-container2" data-aos="fade-left" data-aos-delay="500">
                        <img src={img2} alt="logo" />
                    </div>
                </div>

            </div>
        </section>

    )

};

export default Contact;









