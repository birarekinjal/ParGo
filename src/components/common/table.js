import React from "react";
import { Table } from "react-bootstrap";
import { Pagination } from "../index";
import { messages } from "../../constants";

const CustomTable = ({
  tableClass,
  headers,
  children,
  pageCount,
  onPageChange,
  // activePage,
  // countText,
  // totalItemsCount,
  // pageTextHidden,
  onHeaderClick,
  nextLabel,
  breakLabel,
  breakClassName,
}) => {
  return (
    <div>
      <div className="table-parent">
        <Table className={tableClass} hover>
          <thead>
            <tr>
              {headers.map(
                ({ icons, label, className, component, onHeaderClick }) => {
                  return (
                    <th className={className} onClick={onHeaderClick}>
                      <span>{component || label}</span>
                      {icons &&
                        icons.map((icon) => (
                          <i
                            className={icon.className}
                            onClick={icon.onClick}
                          />
                        ))}
                    </th>
                  );
                }
              )}
            </tr>
          </thead>
          <tbody>
            {children || (
              <tr className="no-data-msg">
                <td colSpan={headers && headers.length}>{messages.noData}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      {children && pageCount > 1 && (
        <Pagination
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
      )}
    </div>
  );
};

export default CustomTable;
