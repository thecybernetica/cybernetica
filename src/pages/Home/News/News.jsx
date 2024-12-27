import React from "react";

import "./News.css";
import "../../../styles/AppStyle.css";

import news1 from "../../../assets/news/news_1.jpg"

const NewsSection = () => {
  return (
    <div className="news">
      <h1 className="title">Blog da Cyber</h1>

      <div className="news-list">
        <img
          src={news1}
          alt="News 1"
          className="news-item"
        />
        <img
          src={news1}
          alt="News 2"
          className="news-item"
        />
        <img
          src={news1}
          alt="News 3"
          className="news-item"
        />
      </div>

      <a href="/atletica" className="see-more">
        Ver mais
      </a>
    </div>
  );
};

export default NewsSection;
