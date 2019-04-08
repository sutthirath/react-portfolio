import React from "react";
import { Redirect } from "react-router";

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      redirect: false,
      access: false
    };
  }

  componentDidMount() {
    this.setState({
      access: true
    });
    this.countdown = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    if (this.state.count <= 0) {
      clearInterval(this.countdown);
      this.setState({
        redirect: true
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      count: 10,
      redirect: false,
      access: false
    });
  }

  tick() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    const { redirect, access } = this.state;
    const { getSuccess } = this.props;
    getSuccess(access);
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Success">
        <h1 className="success-banner">Success! your message was sent</h1>
        <div className="success-msg">
          <p>
            "I appreciate you taking your time to personally write me a message.
            I will send you a response as soon as I can, cheers!"
          </p>
          <h2>~Sean</h2>
        </div>
        <div className="countdown">
          <h6>
            You will be redirected to the home page in {this.state.count}{" "}
            seconds.
          </h6>
        </div>
      </div>
    );
  }
}

export default Success;
