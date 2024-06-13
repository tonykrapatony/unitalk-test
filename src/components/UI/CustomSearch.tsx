import { Button, Grid, TextField, colors } from '@mui/material';
import React, { FC, useState } from 'react'

type CustomSearchProps = {
  setSearch: (value: string) => void;
}

const CustomSearch: FC<CustomSearchProps> = ({ setSearch }) => {
  const [value, setValue] = useState<string>('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const btnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearch(value);
  }

  const resetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearch('');
    setValue('');
  }

  return (
    <Grid container>
      <TextField value={value} className='rounded-r-none' label="Search text..." size='small' onChange={inputHandler}/>
      <Button 
        sx={{
          color: '#00000099',
          borderColor: '#0000003b'
        }}
        variant="outlined" onClick={btnHandler}>Search</Button>
      {value && <Button color='warning'variant="outlined" onClick={resetHandler}>Reset</Button>}
    </Grid>
  )
}

export default CustomSearch