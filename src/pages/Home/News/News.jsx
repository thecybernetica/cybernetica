import React from "react";

import "./News.css";
import "../../../styles/AppStyle.css";

const NewsSection = () => {
  return (
    <div className="news">
      <h1 className="title">Blog da Cyber</h1>

      <div className="news-list">
        <img
          src="https://placehold.co/200"
          alt="News 1"
          className="news-item"
        />
        <div className="spacing" />{" "}
        {/* there is probably a better way to do this spacing */}
        <img
          src="https://placehold.co/200"
          alt="News 2"
          className="news-item"
        />
        <div className="spacing" />{" "}
        {/* there is probably a better way to do this spacing */}
        <img
          src="https://placehold.co/200"
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
