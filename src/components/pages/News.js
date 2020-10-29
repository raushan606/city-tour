import React, { Component } from "react";
import NewsCard from "../NewsCard";
import { InfoConsumer } from "../context";

export default class News extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          return value.news.map((item) => {
            return <NewsCard key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}
