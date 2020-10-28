import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import NotFoundPage from "./components/pages/NotFoundPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}
