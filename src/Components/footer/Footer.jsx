import React from "react";
import "./footer.css";
import brands from "../../media/brands.png";
import { Link } from "react-router-dom";
import routes from "./../../routes/routes"
const Footer = () => {
  return (
    <section className="footer">
      <nav className="footer__nav">
        <h2 className="footer__h2 quicksand">Support</h2>
        <ul className="footer__ul">
          <li className="footer__li quicksand">Track Your Order</li>
          <li className="footer__li quicksand">Terms Of Use</li>
          <li className="footer__li quicksand">Help Centre</li>
          <li className="footer__li quicksand">Privacy Policy</li>
        </ul>
      </nav>


      <img src={brands} alt="brands" className="brands__img" />
      <nav className="footer__nav">
        <h2 className="footer__h2 quicksand"> Links</h2>
        <ul className="footer__ul">
          <Link to={routes.Home}>
            <li className="footer__li quicksand">Home</li>
          </Link>

          <Link to={routes.Home}>
            <li className="footer__li quicksand">About</li>
          </Link>
           <Link to={routes.Home}>
            <li className="footer__li quicksand">Shop</li>
          </Link>
           <Link to={routes.Home}>
            <li className="footer__li quicksand"></li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Footer;
