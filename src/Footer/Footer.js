import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <main className="Footer">
      <div className="Footer-social">
        <div className="wrapper">
          <a
            href="https://www.linkedin.com/in/josh-bellingham-7b4b88b0/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon linkedin">
              <div className="tooltip">Linkedin</div>
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
            </div>
          </a>
          <a
            href="https://github.com/JoshBellingham"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon github">
              <div className="tooltip">Github</div>
              <span>
                <i className="fab fa-github"></i>
              </span>
            </div>
          </a>
          <a href="mailto:jbellingham35@gmail.com">
            <div className="icon email">
              <div className="tooltip">Email</div>
              <span>
                <i className="fa-solid fa-inbox"></i>
              </span>
            </div>
          </a>
          <a
            href="https://twitter.com/joshb_codes"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon twitter">
              <div className="tooltip">Twitter</div>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
