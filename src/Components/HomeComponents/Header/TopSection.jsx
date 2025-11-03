import React from "react";
import siteLogo from "../../../media/site-logo.svg";

import routes from "../../../routes/routes";
import { Link } from "react-router-dom";
const TopSection = () => {
  return (
    <section className="top__section">
      <Link to={routes.Home}>
        <div className="site__logo__div">
          <img src={siteLogo} alt="main site logo" className="site__logo" />
        </div>
      </Link>

      <nav className="social__links__nav">
        <h2 className="nav__h2 merriweather">Follow Us:</h2>
        <ul className="social__links__ul">
          <li className="social__links__li">
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li className="social__links__li">
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li className="social__links__li">
            <i class="fa-brands fa-tiktok"></i>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default TopSection;
