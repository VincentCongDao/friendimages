import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import RouteNavbar from "./RouteNavbar/RouteNavbar";
import Settings from "../Pages/Contact/Settings";
import Account from "../Pages/About/Account";
export default function Navbar() {

  return (
    <Router>
      <RouteNavbar />
      <Switch>
        <Route exact path="/" components={Home}></Route>
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Route path="/Settings" component={Settings} />
        <Route path="/Account" component={Account} />
      </Switch>
    </Router>
  );
}
