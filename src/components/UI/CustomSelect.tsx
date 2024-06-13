import React, { FC } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type CustomSelectProps = {
  show: number;
  setShow: (value: number) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({ show, setShow }) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    setShow(event.target.value as number);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Show</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={show}
        label="Show"
        onChange={handleChange}
        color='primary'
      >
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={32}>32</MenuItem>
        <MenuItem value={64}>64</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CustomSelect