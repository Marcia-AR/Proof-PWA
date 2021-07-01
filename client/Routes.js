import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AllProducts from "./components/AllProducts";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AllProducts} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
