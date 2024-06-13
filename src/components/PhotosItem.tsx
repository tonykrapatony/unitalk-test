import { FC, useState } from 'react'
import { IPhoto } from '../types/types'
import { Grid } from '@mui/material'
import CustomModal from './Modal'

type PhotoItemProps = {
  photo: IPhoto
}

const PhotosItem: FC<PhotoItemProps> = ({ photo }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={6} md={3}>
        <img src={photo.src.tiny} alt={photo.alt} onClick={handleOpen}/>
        <p>{photo.alt} </p>
      </Grid>
      <CustomModal 
        img={photo.src.original}
        alt={photo.alt}
        open={open}
        handleClose={handleClose}
      />
    </>
  )
}

export default PhotosItem