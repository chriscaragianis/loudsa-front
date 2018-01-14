import React from 'react';

const Footer = () => (
  <div className="footer-container">
    <div className="contact-column footer-column">
      <div className="social-icons">
        <ul>
          <li>
            <img src="facebook.svg" alt="facebook link" />
          </li>
          <li>
            <img src="twitter.svg" alt="twitter link" />
          </li>
          <li>
            <img src="gmail.svg" alt="gmail link" />
          </li>
        </ul>
      </div>
    </div>
    <div className="menu-column footer-column">
      Menu
    </div>
    <div className="message-column footer-column">
      Message
    </div>
  </div>
);

export default Footer;
