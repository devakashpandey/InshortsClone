import { Button, Container } from "@mui/material";
import React from "react";
import "./NewsResults.css";
import NewsCard from "../newscard/NewsCard";

const NewsResults = ({ newsArray, resultsCount, loadmore, setLoadMore }) => {
  return (
    <>
      <Container maxWidth="md">
        <div className="contents">
          {newsArray.map((allNews, id) => {
            return (
              <div className="card" key={id}>
                <NewsCard allNews={allNews} />
              </div>
            );
          })}
        </div>{" "}
        <br />
        {loadmore <= resultsCount && (
          <>
            <center>
              <div className="load-btn">
                <Button
                  onClick={() => setLoadMore(loadmore + 20)}
                  variant="outlined"
                >
                  Load More
                </Button>
              </div>
            </center>
          </>
        )}
      </Container>
    </>
  );
};

export default NewsResults;
