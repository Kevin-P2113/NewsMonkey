import React from "react";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export default function News(props) {
  const [headlines, setHeadlines] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetchHeadlinesData = () => {
    props.changeProgress(10);
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4496c2c9dfc44897acb766a82be41bb3&page=${page}&pagesize=${props.pageSize}`
    )
      .then((response) => {
        props.changeProgress(30);
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        setTotalResults(data.totalResults);
        setHeadlines(data.articles);
        props.changeProgress(100);
      });
  };

  useEffect(() => {
    fetchHeadlinesData();
  }, [page, props.category, props.country]);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="container my-4">
        <h1>Headlines - {props.category}</h1>
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
                  mode={props.mode}
                  author={headline.author}
                  date={new Date(headline.publishedAt)}
                ></NewsItem>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container my-4 d-flex justify-content-between">
        <button
          disabled={page <= 1 ? true : false}
          className={`btn btn-${props.mode}`}
          onClick={handlePrevClick}
        >
          &larr; Prev
        </button>
        <button
          disabled={
            Math.ceil(totalResults / props.pageSize) === page ? true : false
          }
          className={`btn btn-${props.mode}`}
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

News.defaultProps = {
  country: "us",
  pageSize: 15,
  category: "business",
};

//proptypes : https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/
