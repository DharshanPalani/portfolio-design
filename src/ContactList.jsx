import React from 'react';
import './css/ContactList.css'; // Import the CSS for styling

const ContactList = () => {
  return (
    <>
      <h2>Contact Me</h2>
      <div className="contacts-container">
        <a href="https://www.instagram.com/dhars._.int_/" target="_blank" rel="noopener noreferrer" className="social-link">
          Instagram
        </a>
        <a href="https://twitter.com/dharshan_palani" target="_blank" rel="noopener noreferrer" className="social-link">
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/dharshan-palani-b33653332/" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
      </div>
      <div className="contact-info">
        <p>Phone: +91 7339689760</p>
        <p>Email: dharshan.contact@gmail.com</p>
      </div>
      </>
  );
};

export default ContactList;