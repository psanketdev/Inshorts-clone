import { Container } from "@mui/material";
import React from "react";
import { APPLE_STORE, PLAY_STORE } from "../../constant";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "@mui/material/Button";

const NewsContent = ({ newsArray, newsResult, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="contnet" style={{ paddingTop: "110px" }}>
        <div className="downloadMsg">
          <p>
            For the best experience use <b>inshorts</b> app on your smartphone
          </p>
          <div>
            <a href="#">
            <img
              src={APPLE_STORE}
              style={{ marginRight: "20px" }}
              alt="apple_store"
              height="80%"
            />
            </a>
            <a href="#">
            <img src={PLAY_STORE} alt="play_store" height="80%" />
            </a>
          </div>
        </div>

        {newsArray.map((news) => {
          return <NewsCard news={news} key={news.title} />;
        })}

        {loadMore <= newsResult && (
          <>
            <Button
              className="btn"
              variant="light"
              onClick={() => setLoadMore(loadMore + 10)}
            >
              Load More
            </Button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
