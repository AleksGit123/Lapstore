import "./home.css";
import "../../GlobalCss/fonts.css";
import laptop from "../../assets/laptop.png";
import Form from "./Form/Form";

const Home = () => {
  
  return (
    <>
      <section className="home__text__div">
        <h1 className="home__h1 dela-gothic-one ">LAPSTORE</h1>
        <ul className="home__ul">
          <li className="home__li montserrat">
            High Quality Laptops, <br />
            wide selection
          </li>
          <li className="home__li montserrat">User Friendly Environement</li>
          <li className="home__li montserrat">Efficent Sales</li>
        </ul>
      </section>

      <section className="home__image__section">
        <div className="laptop__image__div">
          <img src={laptop} alt="laptop" className="laptop" />
        </div>
        <Form/>
      </section>

    </>
  );
};

export default Home;
