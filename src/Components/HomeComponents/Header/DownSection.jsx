import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";
const DownSection = () => {
  return (
    <section className="down__section">
      <nav className="down__section__nav">
        <ul className="down__section__ul">
          <Link to={routes.Home}>
            <li className="pages__li merriweather">Home</li>
          </Link>
          <Link to={routes.shop}>
            <li className="pages__li merriweather">Shop</li>
          </Link>
          <Link to={routes.about}>
            <li className="pages__li merriweather">About Us</li>
          </Link>
          <Link to={routes.myAccount}>
            <li className="pages__li merriweather">My Account</li>
          </Link>
          <Link to={routes.contact}>
            <li className="pages__li merriweather">Contact</li>
          </Link>
        </ul>
      </nav>
      <div className="input__div">
        <input
          type="text"
          name="search"
          placeholder="search"
          className="search merriweather"
        />
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ color: "#000000;" }}
        ></i>
      </div>

      <div className="cart__div">
        <Link to={routes.cart}>
          <i
            class="fa-solid fa-cart-shopping"
            style={{ color: "#000000;" }}
          ></i>
          <span className="cart__span merriweather">0</span>
        </Link>

        <p className="total__price merriweather">$ 0</p>
      </div>
    </section>
  );
};

export default DownSection;
