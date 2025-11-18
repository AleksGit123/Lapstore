import React from "react";
import Header from "../../Components/HomeComponents/Header/Header";
import Section1 from "../../Components/HomeComponents/Section1/Section1";
import ScrollSection from "../../Components/HomeComponents/scrollSection/ScrollSection";
import MoreCategories from "../../Components/HomeComponents/moreCategories/MoreCategories";
import SalesTimer from "../../Components/HomeComponents/sales-timer/SalesTimer";
import ProductSect from "../../Components/HomeComponents/productSection/ProductSect";
const Home = () => {
  return (
    < >
      <Header />
      <Section1 />
      <ScrollSection/>
      <MoreCategories/>
      <SalesTimer/>
      <ProductSect/>
    </>
  );
};

export default Home;
