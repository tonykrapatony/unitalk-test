import React, { FC } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type BasicPaginationProps = {
  total: number;
  setPage: (value: number) => void;
}

const BasicPagination: FC<BasicPaginationProps> = ({ total, setPage }) => {

  const handleChange = (_event: React.ChangeEvent<any>, page: number) => {
    setPage(page);
  };

  return (
    <Stack spacing={2} alignItems={'center'}>
      <Pagination 
        size='large' 
        count={total} 
        color="primary" 
        onChange={handleChange}
      />
    </Stack>
  );
}

export default BasicPagination