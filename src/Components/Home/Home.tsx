import { useState } from "react";
import laptop from "../../assets/laptop.png";
import "./home.css";
import "../../GlobalCss/fonts.css";
import routes from "../../routes/route";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [zoomed, setZoomed] = useState(false);
  const toggleZoom = () => {
    setZoomed(true);
  };

  return (
    <>
      <section className="home__text__div">
        <h1 className="home__h1 dela-gothic-one ">Own the Best</h1>
        <ul className="home__ul">
          <li className="home__li montserrat">
            High Quality Laptops, <br />
            wide selection
          </li>
          <li className="home__li montserrat">User Friendly Environement</li>
          <li className="home__li montserrat">Efficent Sales</li>
        </ul>

        <button className="checkout dela-gothic-one" onClick={toggleZoom}>
          S H O P
        </button>
      </section>

      <section className="home__image__section">
        <div className="laptop__image__div">
          <img src={laptop} alt="laptop" className="laptop" />
        </div>

        <div className="screen__content">
          <header className="screen__header">
            <button className="screen__login__btn screen__btn montserrat">
              Sign Up
            </button>
            <button
              className="screen__sugnup__btn screen__btn montserrat"
              onClick={() => {
                navigate(routes.registration);
              }}
            >
              Log In
            </button>
          </header>
          <h1 className={`screen__text organix ${zoomed ? "zoomed" : ""}`}>
            LAPSTORE
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
