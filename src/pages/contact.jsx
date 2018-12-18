import React from "react";
import "./contact.css";

const Contact = () => (
  <div>
    <div className="contact-links">
      <a
        href="https://github.com/sutthirath"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="contact-btn">
          <i className="fab fa-github" />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/seanvilaysane/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="contact-btn">
          <i className="fab fa-linkedin-in" />
        </button>
      </a>
      <a href="mailto:seanvilaysane@gmail.com" target="_top">
        <button className="contact-btn">
          <i className="far fa-envelope" />
        </button>
      </a>
    </div>
    <section>
      <div className="contact-form">
        <form method="POST">
          <label htmlFor="name">
            Name:
            <input className="contact-input" type="text" name="name" />
          </label>
          <label htmlFor="company">
            Company:
            <input className="contact-input" type="text" name="company" />
          </label>
          <label htmlFor="email">
            Email:
            <input className="contact-input" type="email" name="email" />
          </label>
          <label htmlFor="phone">
            Phone:
            <input className="contact-input" type="tel" name="phone" />
          </label>
          <textarea
            className="contact-textarea"
            placeholder="send me a message"
          />
          <button className="send-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  </div>
);

export default Contact;