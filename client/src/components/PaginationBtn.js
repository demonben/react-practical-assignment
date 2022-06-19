import React from "react";

const PaginationBtn = ({ pageNumber, setPageNumber }) => {
  const FIRST_PAGE = 1;
  //   todo dynamically calculate last page
  const LAST_PAGE = 3;

  const nextPageHandler = () => {
    setPageNumber(pageNumber + 1);
  };
  const prevPageHandler = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="buttons-section">
      {pageNumber <= LAST_PAGE && (
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
