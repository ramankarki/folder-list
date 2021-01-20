import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./Landing/Landing";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <section>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" exact component={Dashboard} />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
