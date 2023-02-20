import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <main className="Footer">
      <div className="Footer-social">
        <div class="wrapper">
          <a
            href="https://www.linkedin.com/in/josh-bellingham-7b4b88b0/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icon linkedin">
              <div class="tooltip">Linkedin</div>
              <span>
                <i class="fab fa-linkedin"></i>
              </span>
            </div>
          </a>
          <a
            href="https://twitter.com/joshb_codes"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icon twitter">
              <div class="tooltip">Twitter</div>
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </div>
          </a>
          <a
            href="https://github.com/JoshBellingham"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icon github">
              <div class="tooltip">Github</div>
              <span>
                <i class="fab fa-github"></i>
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
