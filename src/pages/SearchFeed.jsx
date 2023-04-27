import { Box, Typography } from '@mui/material'
import { Videos } from '../components/Videos'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchFromApi } from '../services/getVideos'

export const SearchFeed = () => {
  const { query } = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const urlSearch = `search?part=snippet&q=${query}&maxResults=30`
    fetchFromApi({ query: urlSearch })
      .then(setVideos)
  }, [query])

  return (
    <Box flex={1} p={2} pr={4} overflow='auto' bgcolor='black'>
      <Typography variant='h5' component='h1' mb={2}>
        Search Results for
        <Typography variant='h5' component='span' color='#FC1503'> {query} </Typography>
        videos:
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}
