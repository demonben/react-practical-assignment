import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nextPage, previousPage } from "../redux/postsSlice";

const PaginationBtn = ({ pageNumber, setPageNumber, totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.posts.currentPage);
  const FIRST_PAGE = 1;
  const LAST_PAGE = totalPages;

  const nextPageHandler = () => {
    dispatch(nextPage(currentPage + 1));
  };
  const prevPageHandler = () => {
    dispatch(previousPage(currentPage - 1));
  };

  return (
    <div className="buttons-section">
      {currentPage < LAST_PAGE && (
        <button onClick={nextPageHandler} className="button">
          NEXT
        </button>
      )}

      {currentPage > FIRST_PAGE && (
        <button onClick={prevPageHandler} className="button">
          PREV
        </button>
      )}
    </div>
  );
};

export default PaginationBtn;
