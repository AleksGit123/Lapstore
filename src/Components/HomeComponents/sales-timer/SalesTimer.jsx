/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./salesTimer.css";

const SalesTimer = () => {
  // eslint-disable-next-line no-unused-vars
  let [hours, setHours] = useState(60);
  let [minutes, setMinutes] = useState(60);
  let [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let timer = setInterval(() => {
    if (seconds > 0) {
      setSeconds(prev => prev-1);
    } else{
      setSeconds(60);
      setMinutes(prev => prev-1);
    }

    if(minutes === 0){
      setHours(prev => prev -1);
      setMinutes(1);
    }

  }, 1000);

  // console.log(hours,minutes,seconds);

  return () => {clearInterval(timer) }
  }, [hours,minutes,seconds])

  return (
    <section className="sales__timer">
      <div className="timer__text__div">
        <h2 className="timer__text merriweather">Special Offers!</h2>
        <p className="timer__p merriweather">
          Don't miss out on our exclusive sales,{" "}
          <span className="timer__span">Go for it</span>
        </p>
        <button className="timer__button merriweather">Let's Do It</button>
      </div>

      <div className="timer">
        <div className="time">
          <h2 className="hours merriweather">{hours}</h2>
        </div>
        <div className="time">
          <h2 className="minutes merriweather">{minutes}</h2>
        </div>
        <div className="time">
          <h2 className="seconds merriweather">{seconds}</h2>
        </div>
      </div>
    </section>
  );
};

export default SalesTimer;
