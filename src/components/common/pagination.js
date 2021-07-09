import React from "react";
// import ReactPagination from 'react-js-pagination';
import { constants } from "../../constants";
import ReactPaginate from "react-paginate";

const Pagination = ({
  // page,
  // totalPages,
  // totalItemCount,
  // onPageChange,
  // pageText,
  // color,
  // pageTextHidden,
  pageCount,
  onPageChange,
}) => {
  const { ofPlaceholder, pagePlaceholder } = constants.pagination;
  return (
    <div className={`pagination-row `}>
      {/* {!pageTextHidden && (
        <p className="counter">
          {pagePlaceholder} <span>{page}</span> {ofPlaceholder}{' '}
          <span>{pageCount}</span> {pageCount}
        </p>
      )} */}
      <ReactPaginate
        onPageChange={onPageChange}
        pageCount={pageCount}
        previousLabel={"pre"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        marginPagesDisplayed={5}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
