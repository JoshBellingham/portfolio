import React from "react";
import "./Portfolio.css";
import Footer from "../Footer/Footer";
import App from "../App";

export default function Portfolio(props) {
  //States
  const { view, setView } = props;

  const changeView = () => {
    if (view === "Portfolio") {
      setView("Landing");
    }
  };

  if (view === "Portfolio") {
    return (
      <div className="Portfolio">
        <nav className="navigation">
          <h2 className="title">Josh Bellingham</h2>
          <div className="nav-buttons">
            <button href="#anchor-name" className="nav-btn" onClick={changeView}>
              Home
            </button>
            <a href="#my-work" className="nav-btn">
              My Work
            </a>
            <a href="#contact" className="nav-btn">
              Contact
            </a>
          </div>
        </nav>

        <h1 className="header">Hi! I'm Josh</h1>
        <div className="main-container">
          <p className="main-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id. At urna condimentum
            mattis pellentesque id nibh tortor id. Sapien et ligula ullamcorper
            malesuada proin libero. Lacus laoreet non curabitur gravida arcu ac.
            Tempus egestas sed sed risus pretium quam vulputate. Eget dolor
            morbi non arcu risus quis varius quam quisque. Eget aliquet nibh
            praesent tristique magna sit amet purus gravida. Egestas pretium
            aenean pharetra magna ac placerat vestibulum. Ornare arcu dui
            vivamus arcu felis bibendum ut tristique. sed sed risus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lacus vel facilisis
            volutpat est velit egestas dui id. At urna condimentum mattis
            pellentesque id nibh tortor id.
          </p>
          <img
            className="Headshot"
            src="../Headshot.jpg"
            alt="Josh Bellingham"
          />
        </div>

        <h1 id="my-work" className="header">My Work</h1>
        <div className="project-container">
          <div className="project-left">
            <img className="project-img1" src="Sun.png" alt="sun" />
            <p className="project-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
              vel facilisis volutpat est velit egestas dui id. At urna
              condimentum mattis pellentesque id nibh tortor id. Sapien et
              ligula ullamcorper malesuada proin libero. Lacus laoreet non
              curabitur gravida arcu ac. Tempus egestas sed sed risus pretium
              quam vulputate. Eget dolor morbi non arcu risus quis varius quam
              quisque. Eget aliquet nibh praesent tristique magna sit amet purus
              gravida. Egestas pretium aenean pharetra magna ac placerat
              vestibulum. Ornare arcu dui vivamus arcu felis bibendum ut
              tristique. sed sed risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="project-btns">
              <button className="btn proj">Live Demo</button>
              <button className="btn proj">View On Github</button>
            </div>
          </div>
          <div className="project-right">
            <p className="project-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
              vel facilisis volutpat est velit egestas dui id. At urna
              condimentum mattis pellentesque id nibh tortor id. Sapien et
              ligula ullamcorper malesuada proin libero. Lacus laoreet non
              curabitur gravida arcu ac. Tempus egestas sed sed risus pretium
              quam vulputate. Eget dolor morbi non arcu risus quis varius quam
              quisque. Eget aliquet nibh praesent tristique magna sit amet purus
              gravida. Egestas pretium aenean pharetra magna ac placerat
              vestibulum. Ornare arcu dui vivamus arcu felis bibendum ut
              tristique. sed sed risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <img className="project-img2" src="Sun.png" alt="sun" />
            <div className="project-btns">
              <button className="btn proj">Live Demo</button>
              <button className="btn proj">View On Github</button>
            </div>
          </div>
        </div>
        {/* Form Goes Here */}
        <Footer />
      </div>
    );
  } else if (view === "Landing") {
    return <App />;
  }
}
