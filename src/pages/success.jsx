import React from "react";
import { Redirect } from "react-router";
import sig from "../images/sean_flash.jpg";

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      redirect: false
    };
  }

  componentDidMount() {
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
      redirect: false
    });
  }

  tick() {
    this.setState({
      count: this.state.count - 1
    });
  }

  /*--- CSS Start ---*/

  flex = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgb(66, 65, 82)"
  };

  animate = {
    padding: "2vh",
    color: "greenyellow"
  };

  card = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30vw",
    height: "50vh",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    backgroundColor: "rgb(5, 5, 5)"
  };

  msg = {
    maxWidth: "25vw",
    backgroundColor: "rgb(5, 5, 5)"
  };

  /*--- CSS End ---*/

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Success" style={this.flex}>
        <div className="success-banner" style={this.animate}>
          <h1>Success, your message was sent!</h1>
        </div>
        <div className="success-msg" style={this.card}>
          <div style={this.msg}>
            <p style={{ color: "white", padding: "10px 0" }}>
              <strong>"</strong> Thank you for taking your time to write me a
              message. I very much appreciate it and I will send you a response
              as soon as I can, cheers! <strong>"</strong>
            </p>
            <img
              src={sig}
              alt="signature"
              style={{ maxWidth: "100px", float: "right" }}
            />
          </div>
        </div>
        <div className="countdown">
          <h6 style={{ color: "white", paddingBottom: "5vh" }}>
            You will be redirected to the home page in {this.state.count}{" "}
            seconds.
          </h6>
        </div>
      </div>
    );
  }
}

export default Success;
