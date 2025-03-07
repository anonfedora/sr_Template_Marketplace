import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pagination: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pagination,
}) => {
  function handlePrev() {
    if (currentPage > 1) {
      pagination(currentPage - 1);
      console.log("Previous button clicked", currentPage);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      pagination(currentPage + 1);
      console.log("Next button clicked", currentPage);
    }
  }

  return (
    <div className="flex justify-between text-sm space-x-4 w-fit mx-auto items-center bg-white p-4 mt-4">
      <button
        className={`px-4 py-2 rounded border border-[#E4E4E7] ${
          currentPage === 1
            ? "cursor-not-allowed"
            : "cursor-pointer hover:bg-gray-200"
        }`}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <div className="text-sm text-gray-600 flex space-x-3 items-center">
        {/* Page {currentPage} of {totalPages} */}
        <span className="border border-[#e4e4e7] p-2 px-4 rounded">
          {currentPage}
        </span>
        <span className="border border-[#e4e4e7] p-2 px-4 rounded">
          {totalPages}
        </span>
      </div>

      <button
        className={`px-4 py-2 rounded border border-[#E4E4E7] ${
          currentPage === totalPages
            ? "cursor-not-allowed"
            : "cursor-pointer hover:bg-gray-200"
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
