import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import routes from "./routes/route";
import Register from "./Components/Registration/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.registration} element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
