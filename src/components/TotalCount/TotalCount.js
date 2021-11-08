import React from "react";
import "./TotalCount.css";

const TotalCount = ({ pagination }) => {
  return (
    <section>
      {pagination && (
        <div className="Giphy-app__data-totalCount">
          <span className="Images__totalCount">Images</span>
          <span className="Images__totalCount">Total</span>
          <span className="Images__totalCount">Count</span>
          <span className="giphy-app__offset">
            {pagination?.offset + 20}
          </span>{" "}
          <span className="Images__totalCount">/</span>
          <span className="giphy-app__totalCount">
            {pagination.total_count}
          </span>
        </div>
      )}
    </section>
  );
};

export default TotalCount;
