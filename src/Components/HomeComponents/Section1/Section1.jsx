import React from "react";
import "./section1.css";

//import media for filter articles
import laptop1 from "../../../media/13inch.png";
import laptop2 from "../../../media/14inch.png";
import laptop3 from "../../../media/15inch.png";
import businessLaptops from "../../../media/bussinessLaptops.png";
import gamingLaptops from "../../../media/gamingLaptops.png";
import videoEditing from "../../../media/videoEditing.png";

// images for hover on filter articles
import laptop13inch from "../../../media/13_inch_laptop.png";
import laptop14Inch from "../../../media/14_inch_laptop.png";
import laptop15Inch from "../../../media/15inchlaptop.png";
import businessLaptop from "../../../media/businessLaptop.png";
import gamingLaptop from "../../../media/gamingLaptop.png";
import videoEditingLaptop from "../../../media/videoEditingLaptop.png";
const Section1 = () => {
  let articleData = [
    {
      id: 1,
      src: laptop1,
      src2: laptop13inch,
      alt: "13 eahcn laptop image",
      text: "13'' Laptops",
    },
    {
      id: 2,
      src: laptop2,
      src2: laptop14Inch,
      alt: "14 eahcn laptop image",
      text: "14'' Laptops",
    },
    {
      id: 3,
      src: laptop3,
      src2: laptop15Inch,
      alt: "15 eahcn laptop image",
      text: "15'' Laptops",
    },
    {
      id: 4,
      src: businessLaptops,
      src2: businessLaptop,
      alt: "business laptops image",
      text: "Business ",
    },
    {
      id: 5,
      src: gamingLaptops,
      src2: gamingLaptop,
      alt: "gaming laptops image",
      text: "Gaming ",
    },
    {
      id: 6,
      src: videoEditing,
      src2: videoEditingLaptop,
      alt: "Video editing laptops image",
      text: "Video Editing",
    },
  ];

  return (
    <section className="section1">
      {articleData.map((item) => {
        return (
          <article className="filter__articles" key={item.id}>
            <img src={item.src} alt={item.alt} className="filter__images" />
            <img
              src={item.src2}
              key={item.id}
              alt="laptop images"
              className="laptop__images"
            />
            <h2 className="filter__articles__h2 quicksand">{item.text}</h2>
          </article>
        );
      })}
    </section>
  );
};

export default Section1;
