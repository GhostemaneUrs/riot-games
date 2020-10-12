import React from "react";
import Home from "../pages/home.js";
import Registry from "../pages/registry.js";
import Login from "../pages/login.js";
import NotFound from "../pages/notFound.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/notfound" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
