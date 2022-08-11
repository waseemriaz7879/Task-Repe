import React from 'react';
import { Pagination } from 'react-bootstrap';

export default function PaginationComponent({
  totalItems,
  currentPage,
  itemsPerPage,
  handleCurrentPageChange,
}) {
  const pages = new Array(Math.ceil(totalItems / itemsPerPage)).fill(0);

  return (
    <div>
      <Pagination className="justify-content-center " size="md">
        {pages.map((_value, index) => {
          const number = index + 1;

          return (
            <Pagination.Item
              key={number}
              active={number === currentPage}
              onClick={() => handleCurrentPageChange(number)}
            >
              {number}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}
