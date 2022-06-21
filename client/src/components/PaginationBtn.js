import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nextPage, previousPage } from "../redux/postsSlice";

const PaginationBtn = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.posts.currentPage);
  const pagesTotal = useSelector((state) => state.posts.totalPages);
  const FIRST_PAGE = 1;

  const nextPageHandler = () => {
    dispatch(nextPage(currentPage + 1));
  };
  const prevPageHandler = () => {
    dispatch(previousPage(currentPage - 1));
  };

  return (
    <div className="buttons-section">
      {currentPage < pagesTotal && (
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
