import './GlobalCss/App.css';
// import routes,route
import { Routes, Route } from 'react-router-dom';
// import rouoter folder
import routes from './routes/routes';
// import link from "./media/link.svg"

// import pages
import Home from './Pages/Home/Home';
import { useState } from 'react';
function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <main className='App'>
      <section className={`contact__div ${clicked && "clicked"}`} onClick={() => setClicked(!clicked)}>
        <h2 className="contact__h2 quicksand"> C O N T A C T  
          <span className="contact__span quicksand">U S</span> 
        </h2>

        <nav className='contact__navigation'>
          <ul className='contact__ul'>
            <li className='contact__li instagram quicksand'>
              <i class="fa-brands fa-facebook-f" style={{color:" #00aaff"}}></i>
            </li>
            <li className='contact__li facebook quicksand'>
              <i class="fa-brands fa-instagram"  style={{color:" #00aaff"}} ></i>
            </li>
            <li className='contact__li mail quicksand'>
              <i class="fa-regular fa-envelope" style={{color:" #00aaff"}}>
              </i>
            </li>
            <li className='contact__li phone quicksand'>
              <i class="fa-solid fa-phone" style={{color:" #00aaff"}}></i>
            </li>

          </ul>
        </nav>
      </section>

      <Routes>
        
        <Route path={routes.Home} element={<Home />} />


      </Routes>

      
    </main>
  );
}

export default App;
