import React from "react";
import { Spinner } from "react-bootstrap";
const LoadingSpinner = ({ isLoading }) => {
  return (
    <section>
      {isLoading ? (
        <>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
        </>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default LoadingSpinner;
