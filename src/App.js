import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";
import Success from "./pages/success.jsx";

class App extends Component {
  getSuccess = data => {
    console.log("Success Access: ", data);
    return data;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/projects" render={() => <Projects />} />
            <Route exact path="/resume" render={() => <Resume />} />
            <Route
              exact
              path="/contact"
              render={() => <Contact getSuccess={this.getSuccess} />}
            />
            <Route
              exact
              path="/success"
              render={() => {
                if (this.getSuccess()) {
                  return <Success />;
                }
              }}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
