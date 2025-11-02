import React from "react";
import "./header.css";
import "../../GlobalCss/Fonts.css";
import TopSection from "./TopSection";
import DownSection from "./DownSection";
// import media

const Header = () => {
  return (
    <header className="header">
      <TopSection />
      <DownSection />
    </header>
  );
};

export default Header;
