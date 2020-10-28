import React, { Component } from "react";
import { InfoConsumer } from "../context";
export default class Home extends Component {
  render() {
    return (
      <div>
        <InfoConsumer>
          {(data) => {
            return <h2>{data}</h2>;
          }}
        </InfoConsumer>
      </div>
    );
  }
}
