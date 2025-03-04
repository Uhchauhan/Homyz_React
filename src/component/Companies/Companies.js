
// import React from "react";

// import img1 from "./prologis.png"

// import img2 from "./tower.png"

// import img3 from "./equinix.png"

// import img4 from "./realty.png"


// import "./Companies.css"

// const Companies = () => {
//     return(
//         <section className="c-wrapper">
//             <div className="paddings innerWidth flexCenter c-container" data-aos="zoom-in">
//                 <img src={img1} alt="" />
//                 <img src={img2} alt="" />
//                 <img src={img3} alt="" />
//                 <img src={img4} alt="" />
//             </div>
//         </section>
//     )
// };


// export default Companies;







import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import img1 from "./prologis.png";
import img2 from "./tower.png";
import img3 from "./equinix.png";
import img4 from "./realty.png";

import "./Companies.css";

const Companies = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration
    }, []);

    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <img src={img1} alt="" data-aos="zoom-in" data-aos-delay="100" />
                <img src={img2} alt="" data-aos="zoom-in" data-aos-delay="200"/>
                <img src={img3} alt="" data-aos="zoom-in" data-aos-delay="300"/>
                <img src={img4} alt="" data-aos="zoom-in" data-aos-delay="400"/>
            </div>
        </section>
    );
};

export default Companies;
