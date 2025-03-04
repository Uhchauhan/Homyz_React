
// import React from "react";

// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

// import "react-accessible-accordion/dist/fancy-example.css";

// import { MdOutlineArrowDropDown } from 'react-icons/md';

// import img1 from "./value.png"

// import data from '../../utlis/accordion'

// import "./Value.css"

// const Value = () => {

//     return (

//         <section className="v-wrapper">
//             <div className="paddings innerWidth flexCenter v-container">
//                 {/* left side */}

//                 <div className="v-left">
//                     <div className="image-container">
//                         <img src={img1} alt="" />
//                     </div>
//                 </div>

//                 {/* Right side */}

//                 <div className="flexColStart v-right">
//                     <span className="orangeText">Our Value</span>
//                     <span className="primaryText">Value We Give to You</span>
//                     <span className="secondaryText">We always ready to help by providing the best servies for ypu.<br />
//                         We belive a good place to live can make ypur life better</span>


//                     <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
//                         {data.map((item, i) => {

//                             return(
//                                 <AccordionItem className="accordionItem">
//                                    <AccordionItemHeading>

//                                    </AccordionItemHeading>
//                                 </AccordionItem>
//                             )

//                         })}
//                     </Accordion>
//                 </div>
//             </div>
//         </section>

//     )
// };


// export default Value;




// import React, { useState } from "react";

// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

// import "react-accessible-accordion/dist/fancy-example.css";

// import { MdOutlineArrowDropDown } from 'react-icons/md';

// import img1 from "./value.png"

// import data from '../../utlis/accordion'

// import "./Value.css"

// const Value = () => {

//     const [className, setClassName ] = useState(null);


//     return (

//         <section className="v-wrapper">
//             <div className="paddings innerWidth flexCenter v-container">
//                 {/* left side */}

//                 <div className="v-left">
//                     <div className="image-container">
//                         <img src={img1} alt="" />
//                     </div>
//                 </div>

//                 {/* Right side */}

//                 <div className="flexColStart v-right">
//                     <span className="orangeText">Our Value</span>
//                     <span className="primaryText">Value We Give to You</span>
//                     <span className="secondaryText">
//                         We are always ready to help by providing the best services for you.
//                         We believe a good place to live can make your life better.
//                     </span>

//                     <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
//                         {data.map((item, i) => {


//                             return (
//                                 <AccordionItem className= {`accordionItem ${className}`} key={i} uuid={i}>
//                                     <AccordionItemHeading>
//                                         <AccordionItemButton className="flexCenter accordionButton">

//                                             <AccordionItemState>
//                                                 {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
//                                             </AccordionItemState>

//                                             <div className="flexCenter icon">{item.icon}</div>
//                                             <span className="primaryText">
//                                                 {item.heading}
//                                             </span>
//                                             <div className="flexCenter icon">
//                                                 <MdOutlineArrowDropDown size={20} />
//                                             </div>
//                                         </AccordionItemButton>
//                                     </AccordionItemHeading>

//                                     <AccordionItemPanel>
//                                         <p className="secondaryText">{item.detail}</p>
//                                     </AccordionItemPanel>
//                                     <AccordionItemPanel>
//                                         <p>{item.content}</p>
//                                     </AccordionItemPanel>
//                                 </AccordionItem>
//                             );
//                         })}
//                     </Accordion>
//                 </div>
//             </div>
//         </section>

//     );
// };

// export default Value;







// chart


import React, { useState, useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import { MdOutlineArrowDropDown } from "react-icons/md";

import img1 from "./value.png";
import data from "../../utlis/accordion";

import "./Value.css";

const Value = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  const [className, setClassName] = useState(null);

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container" data-aos="fade-right" data-aos-delay="500">
            <img src={img1} alt="Our Values" />
          </div>
        </div>


        {/* Right Side */}
        <div className="flexColStart v-right" data-aos="fade-up">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => (
              <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                <AccordionItemHeading data-aos="fade-left"
              data-aos-delay={`${i * 100 + 500}`}>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <AccordionItemState>
                      {({ expanded }) => setClassName(expanded ? "expanded" : "collapsed")}
                    </AccordionItemState>

                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
