import "./pagination.css";
import React from "react";
import { useContext } from "react";
import { GamesContext } from "../../context/context";

const Pagination = ({ totalPosts }) => {
  const pageNumbers = [];
  const { postsPerPage, currentPage, setCurrentPage } = useContext(
    GamesContext
  );

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <dev className="pagination">
        {pageNumbers.map((number) => (
          <dev
            key={number}
            onClick={() => setCurrentPage(number)}
            className={
              number === currentPage ? "page-item" : "page-item active"
            }
          >
            {number}
          </dev>
        ))}
      </dev>
    </nav>
  );
};

export default Pagination;
