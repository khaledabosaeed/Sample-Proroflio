import React from 'react';
import './Footer.scss'; // Make sure to style it

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Khaled Blata. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/khaledabosaeed" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:your-email@example.com">Email</a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
