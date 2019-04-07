import React from "react";
import "./contact.css";
import Success from "../pages/success";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      nameField: false,
      emailField: false,
      textField: false
    };
  }

  componentWillUnmount() {
    this.setState({
      valid: false,
      namefield: false,
      emailField: false,
      textField: false
    });
  }

  handleForm = async () => {
    if (this.state.nameField && this.state.emailField && this.state.textField) {
      return await setTimeout(this.formSubmit, 2400);
    }
  };

  handleInput1 = () => {
    this.setState({
      nameField: true
    });
  };

  handleInput2 = () => {
    this.setState({
      emailField: true
    });
  };

  handleInput3 = () => {
    this.setState({
      textField: true
    });
  };

  formSubmit = () => {
    this.setState({
      valid: true
    });
  };

  render() {
    if (this.state.valid) return <Success />;
    return (
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
            <form
              method="post"
              name="portfolio-msg"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="portfolio-msg" />
              <label className="hidden">
                Don’t fill this out if you're human:
                <input className="contact-input" type="text" name="bot-field" />
              </label>
              <label>
                Name:
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  onChange={this.handleInput1}
                  required
                />
              </label>
              <label>
                Company:
                <input className="contact-input" type="text" name="company" />
              </label>
              <label>
                Email:
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  onChange={this.handleInput2}
                  required
                />
              </label>
              <label>
                Phone:
                <input className="contact-input" type="tel" name="phone" />
              </label>
              <textarea
                className="contact-textarea"
                placeholder="send me a message"
                name="message"
                onChange={this.handleInput3}
                required
              />
              <div data-netlify-recaptcha="true" />
              <button
                className="send-btn"
                type="submit"
                onClick={this.handleForm}
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
