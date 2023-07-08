import React from "react";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function News(props) {
  const [headlines, setHeadlines] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetchHeadlinesData = () => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=4496c2c9dfc44897acb766a82be41bb3&page=${page}&pagesize=${props.pageSize}`
    )
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        setTotalResults(data.totalResults);
        setHeadlines(data.articles);
      });
  };

  useEffect(() => {
    fetchHeadlinesData();
  }, [page]);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="container my-4">
        <h1>NewsMonkey - Headlines</h1>
        {loading && <Spinner></Spinner>}
        {!loading && headlines.length > 0 && (
          <div className="row">
            {headlines.map((headline) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 my-4"
                key={headline.url}
              >
                <NewsItem
                  title={headline.title}
                  description={headline.description}
                  imageUrl={headline.urlToImage}
                  url={headline.url}
                ></NewsItem>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1 ? true : false}
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Prev
        </button>
        <button
          disabled={
            Math.ceil(totalResults / props.pageSize) === page ? true : false
          }
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}
