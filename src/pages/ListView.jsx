import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const ListView = ({ openModal }) => {
  const state = useSelector((store) => store.flight);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 15;
  const offset = currentPage * itemsPerPage;
  const currentItems = state.flights.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(state.flights.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="list-view">
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Detay</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button
                  onClick={() => openModal(flight.id)}
                  className="detail-button"
                >
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"← Geri"}
          nextLabel={"İleri →"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"previous"}
          nextClassName={"next"}
          disabledClassName={"disabled"}
          pageClassName={"page"}
          pageLinkClassName={"page-link"}
          breakClassName={"break"}
        />
      </div>
    </div>
  );
};

export default ListView;
