import React from "react";
import Header from "../../Components/HomeComponents/Header/Header";
import Section1 from "../../Components/HomeComponents/Section1/Section1";
import ScrollSection from "../../Components/HomeComponents/scrollSection/ScrollSection";
import MoreCategories from "../../Components/HomeComponents/moreCategories/MoreCategories";
const Home = () => {
  return (
    <main className="App">
      <Header />
      <Section1 />
      <ScrollSection/>
      <MoreCategories/>
    </main>
  );
};

export default Home;
