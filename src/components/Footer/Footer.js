import React from 'react';
import './Footer.module.css';

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <hr />
      <div className="page-wrapper"></div>
      <footer>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h1 className="logo-text">
                <span className="logo-span"></span>Aman &nbsp;
                <span className="logo-span"></span>Mirza
              </h1>
              <p className="footer-para">
                FullStack Web,Mobile,AI And Cloud Native Develoer
              </p>
              <div className="contact">
                <span>
                  <i className="fas fa-envelope"></i>&nbsp;
                  aman.mirza358@@gmail.com
                </span>
              </div>
              <div className="socials">
                <a
                  href="https://www.facebook.com/amanmirza99/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>

                <a
                  href="https://instagram/amanmirza99/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/amanymous"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">&copy; | Make By Aman Mirza</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
