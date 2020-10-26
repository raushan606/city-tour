import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
