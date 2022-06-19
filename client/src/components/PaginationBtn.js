import React from "react";

const PaginationBtn = ({ pageNumber, setPageNumber, totalPages }) => {
  const FIRST_PAGE = 1;
  const LAST_PAGE = totalPages;

  const nextPageHandler = () => {
    setPageNumber(pageNumber + 1);
  };
  const prevPageHandler = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="buttons-section">
      {pageNumber < LAST_PAGE && (
        <button onClick={nextPageHandler} className="button">
          NEXT
        </button>
      )}

      {pageNumber > FIRST_PAGE && (
        <button onClick={prevPageHandler} className="button">
          PREV
        </button>
      )}
    </div>
  );
};

export default PaginationBtn;
