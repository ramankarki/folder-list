import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Landing from "./Landing/Landing";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import "./App.scss";
import { activeDropdown } from "../actions";

class App extends React.Component {
  render() {
    return (
      <section
        onClick={() => this.props.activeDropdown("app-container")}
        className="app"
      >
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" exact component={Dashboard} />
          <p className="footer-text">
            Full stack app coded by{" "}
            <a href="https://github.com/ramankarki">Raman Karki</a>
          </p>
        </BrowserRouter>
      </section>
    );
  }
}

export default connect(null, { activeDropdown })(App);
