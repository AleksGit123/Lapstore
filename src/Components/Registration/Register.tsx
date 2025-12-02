import "./register.css";

const Register = () => {
  return (
    <>
      <form action="#" className="login__form registration">
        <div className="input__div">
          <input
          type="text"
          name="full-name"
          id="fullName"
          className="montserrat"
          placeholder="Full Name"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          id="Email"
          className="montserrat"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          type="text"
          name="password"
          id="password"
          className="montserrat"
          placeholder="password"
          autoComplete="off"
        />
        </div>
        

        <button className="submit dela-gothic-one">Log In</button>
      </form>
    </>
  );
};

export default Register;
