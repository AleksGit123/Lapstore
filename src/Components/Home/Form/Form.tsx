import { useState } from "react";
import "./from.css";
const Form = () => {
  const [isHovered, setisHovered] = useState(false);

  const setClass = isHovered ? "small__cursor" : "";

  const mouseEnter = () => {
    setisHovered(true);
  };

  const mouseLeave = () => {
    setisHovered(false);
  };
  return (
    <div
      className={`register__div ${setClass}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <header className="header">
        <i className="fa-solid fa-user-plus small__cursor" style={{color:"#000000;"}}></i>
        <button className="register__toggle montserrat small__cursor">Log In</button>
      </header>

      <form action="#" className="signup__form">
        <h2 className="form__h2  montserrat">Sign Up</h2>
        <input
          type="text"
          name="full-name"
          id="fullName"
          className="small__cursor montserrat"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="full-name"
          id="email"
          className=" montserrat"
          placeholder="Email"
        />
        <input
          type="text"
          name="full-name"
          id="password"
          className=" montserrat"
          placeholder="Password"
        />

        <button className="submit montserrat">D O N E</button>
      </form>
    </div>
  );
};

export default Form;
