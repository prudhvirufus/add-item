import React from "react";
import "./paginationStyles.css";

const Pagination = (props) => {
  const { currentPage, goToNextPage, goToPreviousPage, lastPage } = props;
  return (
    <div className="pagination-container">
      <button
        className="pagination-control"
        onClick={goToPreviousPage}
        disabled={currentPage === 1 ? true : false}
      >
        <strong>-</strong>
      </button>
      <strong className="page-number">{currentPage}</strong>
      <button
        className="pagination-control"
        onClick={goToNextPage}
        disabled={lastPage === currentPage ? true : false}
      >
        <strong>+</strong>
      </button>
    </div>
  );
};

export default Pagination;
