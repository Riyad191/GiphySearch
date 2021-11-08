import React from "react";

const TotalCount = ({ pagination }) => {
  return (
    <section>
      {pagination && (
        <div className="Giphy-app__data-totalCount">
          <span className="Images__totalCount">Images</span>
          <br />
          <span className="Images__totalCount">Total</span>
          <br />
          <span className="Images__totalCount">Count</span>
          <br />
          <span className="giphy-app__offset">
            {pagination?.offset + 20}
          </span>{" "}
          <br />
          <span className="Images__totalCount">/</span>
          <br />
          <span className="giphy-app__totalCount">
            {pagination.total_count}
          </span>
        </div>
      )}
    </section>
  );
};

export default TotalCount;
