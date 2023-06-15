import { useState, useEffect } from 'react';

export const usePagination = ({ data, itemsPerPage }) => {
  const [portion, setPortion] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPortion([...data.slice(0, page * itemsPerPage)]);
  }, [page, data, itemsPerPage]);

  return [portion, setPage];
};
