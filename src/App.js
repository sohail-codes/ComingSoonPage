import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './screens/home';
import Appref from './screens/appref';
import Product from './screens/product';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/app/:id">
            <Appref />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route>
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}
