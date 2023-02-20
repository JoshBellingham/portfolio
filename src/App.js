import React, { useState } from "react";
import "./App.css";
import Portfolio from "./Portfolio/Portfolio";
// import Projects from "./Projects";

function AppTest() {
  //States
  const [view, setView] = useState("Landing");

  console.log(view);

  function changeView() {
    if (view === "Landing") {
      setView("Portfolio");
    } else if (view === "Portfolio") {
      setView("Landing");
    }
  }

  if (view === "Landing") {
    return (
      <div className="App">
        <div className="title">
          <h1 className="title maintext">Josh Bellingham</h1>
          <h2 className="title subtext">Junior Web Developer</h2>
          <button className="title btn" onClick={changeView}>
            <span>Welcome</span>
          </button>
        </div>
        <div className="sun">
          <img className="sun-img" src="Sun.png" alt="Sun" />
          <div className="sun-ray r-one"></div>
          <div className="sun-ray r-two"></div>
          <div className="sun-ray r-three"></div>
          <div className="sun-ray r-four"></div>
        </div>
        <div className="waves">
          <img className="wave-1" src="Wave 1 (1).png" alt="Wave"></img>
          <img className="wave-2" src="Wave 2 (1).png" alt="Wave"></img>
          <img className="wave-3" src="Wave 3 (1).png" alt="Wave"></img>
        </div>
      </div>
    );
  } else if (view === "Portfolio") {
    return <Portfolio />;
  }
}

export default AppTest;
