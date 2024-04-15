import React from "react";
import { PLACEHOLDER_IMG } from "../../constant";
import "./NewsCard.css";

const NewsCard = ({ news }) => {
  console.log(news);

  const fullDate = new Date(news.publishedAt);
  let date = fullDate.toString().split(" ");
  const hr = parseInt(date[4].substring(0, 2));
  const time = hr > 12 ? true : false;

  return (
    <div className="card">
      <img
        src={news.urlToImage ? news.urlToImage : PLACEHOLDER_IMG}
        alt={news.title}
        className="newsImage"
      />
      <div className="card-body">
        <div>
          <div>
            <h2>{news.title}</h2>
            <div className="news-text">
              <a href={news.url} target="_blank">
                <b>Short</b>
              </a>{" "}
              by{" "}
              <span className="author">
                {news.author ? news.author : "Unknown"}
              </span>{" "}
              /{" "}
              <span className="datePublish">
                {time
                  ? `${hr - 12}:${date[4].substring(3, 5)} pm}`
                  : `${hr}:${date[4].substring(3, 5)} am`}{" "}
              </span>{" "}
              on {" "}
              <span className="date">
                {date[2]} {date[1]} {date[3]}, {date[0]}
              </span>
            </div>
          </div>
          <p className="description">{news.description}</p>
        </div>
        <div className="reda-more">
          read more at
          <a href={news.url} target="_blank" className="source">
            <b> {news.source.name}</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
