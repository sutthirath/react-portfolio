import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" render={() => <Home />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/resume" render={() => <Resume />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
