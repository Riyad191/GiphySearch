import React from "react";
import "../GiphyDemo/GiphyDemo.css";
const LoadingSpinner = ({ isLoading }) => {
  return (
    <section className="loading">{isLoading && <h1>loading...</h1>}</section>
  );
};

export default LoadingSpinner;
