import './GlobalCss/App.css';
// import routes,route
import { Routes, Route } from 'react-router-dom';
// import rouoter folder
import routes from './routes/routes';

// import pages
import Home from './Pages/Home/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path={routes.Home} element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
