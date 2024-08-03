import React from "react";
import { FC } from "react";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  // hasNextPage,
  hasPrevPage,
  currentPage,
  onPageChange,
  // totalPages,
}) => {
  // const router = useRouter();

  const goToPrevPage = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    onPageChange(prevPage);
  };

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    onPageChange(nextPage);
  };

  return (
    <div className="pagination-container">
      <button
        className={`paginationBtn ${!hasPrevPage ? "disabled" : ""}`}
        onClick={goToPrevPage}
        disabled={!hasPrevPage}
      >
        &lt; Prev
      </button>

      {[...Array(6)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`paginationBtn ${
              pageNumber === currentPage ? "active" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className={`paginationBtn ${currentPage === 6 ? "disabled" : ""}`}
        onClick={goToNextPage}
        disabled={currentPage === 6}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default PaginationControls;
