import { useEffect, useState } from 'react'
import './App.css'
import { IPhoto } from './types/types'
import { getPhotos, searchPhotos } from './api/fetch'
import List from './components/List'
import CustomPagination from './components/UI/CustomPagination'
import PhotosItem from './components/PhotosItem'
import CustomSelect from './components/UI/CustomSelect'
import { Container, Grid } from '@mui/material'
import CustomSearch from './components/UI/CustomSearch'

function App() {
  const [page, setPage] = useState<number>(1)
  const [show, setShow] = useState<number>(16);
  const [total, setTotal] = useState<number>(0)
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [search, setSearch] = useState<string>('');

  const fetchPhotos = async () => { 
    const data = await getPhotos(page, show);
    console.log(data)
    setPhotos(data.photos);
    setTotal(Math.ceil(data.total_results/show));
  }

  const fetchSearchPhotos = async () => {
    const data = await searchPhotos(search, page, show);
    console.log(data)
    setPhotos(data.photos);
    setTotal(Math.ceil(data.total_results/show));
  }

  useEffect(() => {
    if (search) {
      fetchSearchPhotos();
    } else {
      fetchPhotos();
    }
  }, [page, show, search])


  
  return (
    <>
      <h1 className='p-2'>Photo List</h1>
      <Grid className='px-2 py-4' alignItems={'center'} container spacing={2}>
        <Grid item>
          <CustomSelect show={show} setShow={setShow}/>
        </Grid>
        <Grid item>
          <CustomSearch setSearch={setSearch}/>
        </Grid>
      </Grid>
      <Container maxWidth='xl'>
        <Grid className='py-4' container direction={'column'} gap={5} spacing={2}>
          <List 
            items={photos} 
            renderItem={(photo: IPhoto) => <PhotosItem key={photo.id} photo={photo} />} 
          />
          <CustomPagination total={total} setPage={setPage}/>
        </Grid>
      </Container>
    </>
  )
}

export default App
