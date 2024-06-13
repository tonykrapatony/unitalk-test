import { Grid } from '@mui/material';
import React from 'react'

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
  return (
    <Grid container spacing={2}>
      {props.items.map(props.renderItem)}
    </Grid>
  )
}
