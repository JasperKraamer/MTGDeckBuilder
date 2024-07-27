import React from 'react';

const Pagination = ({ totalCount, pageSize, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalCount / pageSize);

    if (totalPages <= 1) return null;

    const createPageArray = () => {
        const maxPages = 10;
        let startPage, endPage;

        if (totalPages <= maxPages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            startPage = Math.max(currentPage - Math.floor(maxPages / 2), 1);
            endPage = startPage + maxPages - 1;

            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxPages + 1;
            }
        }

        const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
        return pages;
    };

    const pages = createPageArray();

    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={page === currentPage ? 'active' : ''}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
