/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./scrollSection.css";
import scrollImage1 from "../../../media/scroll-img1.png";
import scrollImage2 from "../../../media/scroll-img2.png";
import scrollImage3 from "../../../media/scroll-img3.png";

const ScrollSection = () => {
  let scrollImages = [scrollImage1, scrollImage2, scrollImage3];
  let [currentIndex, setcurrentIndex] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      
      setcurrentIndex((prev) => (prev + 1) % scrollImages.length);
      console.log(currentIndex);
    }, 5000);

    return () => clearInterval(interval);
  });
  return (
    <section className="scroll__section">
      <div className="scroll__div" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        <img src={scrollImage1} className="scroll__img"
      alt="scroll1" />
      <img src={scrollImage2} className="scroll__img" 
      alt="scroll2" />
      <img src={scrollImage3} className="scroll__img"
      alt="scroll3" />
      </div>
      <div className="slogan__div">
        <h2 className="slogan merriweather">
          The <span className="scroll__span">Smart</span> choise
        </h2>
        <h3 className="slogan merriweather">For
          <span className="scroll__span span2"> Smart</span> Technology
        </h3>

        <button className="details__btn merriweather">View Details</button>
      </div>
      
    </section>
  );
};

export default ScrollSection;
