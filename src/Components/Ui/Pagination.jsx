import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./style.css";
const Pagination = ({ handlePageClick, pageCount }) => {
  useEffect(() => {}, [pageCount]);
  return (
    <ReactPaginate
      previousLabel={"Prev"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
