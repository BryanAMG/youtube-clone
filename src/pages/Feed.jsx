import { Box, Stack, Typography } from '@mui/material'
import { Sidebar } from '../components/Sidebar'
import { useEffect, useState } from 'react'
import { fetchFromApi } from '../services/getVideos'
import { Videos } from '../components/Videos'
import { Loader } from '../components/Loader'

export const Feed = () => {
  const [category, setCategory] = useState('New')
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)
  const handleCategory = ({ newCategory }) => {
    setCategory(newCategory)
  }
  useEffect(() => {
    setLoading(true)
    const query = `search?part=snippet&q=${category}&maxResults=30`
    fetchFromApi({ query })
      .then(setVideos)
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [category])
  return (
    <Stack
      maxWidth='1200px'
      mx='auto'
      sx={{
        flexDirection: { md: 'row' },
        height: { md: 'calc(100% - 61px)' }
      }}
    >
      <Stack
        sx={{
          borderRight: { md: '1px solid #3d3d3d' },
          py: { md: 1 }
        }}
      >
        <Sidebar category={category} setCategory={handleCategory} />
        <Typography
          className='copyright'
          textAlign='center'
          color='white'
          variant='body2'
          component='h4'
          py={1}
        >
          Material UI - RapidApi
        </Typography>
      </Stack>
      <Box flex={1} p={2} pr={4} overflow='auto' display='flex' flexDirection='column'>
        <Typography variant='h4' component='h1' mb={2}> {category}
          <Typography variant='h4' component='span' color='#FC1503'> videos </Typography>
        </Typography>
        {videos?.length > 0 && <Videos videos={videos} />}
        {loading && <Loader />}
      </Box>
    </Stack>
  )
}
