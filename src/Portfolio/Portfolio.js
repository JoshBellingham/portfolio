import React from "react";
import './Portfolio.css'
import Footer from "../Footer/Footer"

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <nav>
        <button>Home</button>
        <button>My Work</button>
        <button>Contact</button>
      </nav>
      <h1 className="header">Hi! I'm Josh</h1>
      <p className="main-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis
        volutpat est velit egestas dui id. At urna condimentum mattis
        pellentesque id nibh tortor id. Sapien et ligula ullamcorper malesuada
        proin libero. Lacus laoreet non curabitur gravida arcu ac. Tempus
        egestas sed sed risus pretium quam vulputate. Eget dolor morbi non arcu
        risus quis varius quam quisque. Eget aliquet nibh praesent tristique
        magna sit amet purus gravida. Egestas pretium aenean pharetra magna ac
        placerat vestibulum. Ornare arcu dui vivamus arcu felis bibendum ut
        tristique. sed sed risus.
      </p>
      <img className="Headshot" src="./Headshot-jpg.jpg" alt="Josh Bellingham" />
      <img className="project proj1" alt="" />
      <button className="btn portfolio">Live Demo</button>
      <button className="btn portfolio">View On Github</button>
      <img className="project proj2" alt="" />
      <button className="btn portfolio">Live Demo</button>
      <button className="btn portfolio">View On Github</button>
      {/* Form Goes Here */}
      <Footer />
    </div>
  );
}
