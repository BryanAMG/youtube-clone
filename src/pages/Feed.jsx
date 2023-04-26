import { Box, Grid, Stack, Typography } from '@mui/material'
import { Sidebar } from '../components/Sidebar'
import { useEffect, useState } from 'react'
import { getVideosByCategory } from '../services/getVideos'
import { Category } from '@mui/icons-material'

export const Feed = () => {
  const [category, setCategory] = useState('New')
  const [videos, setVideos] = useState([])

  const handleCategory = ({ newCategory }) => {
    setCategory(newCategory)
  }
  useEffect(() => {
    const query = `search?part=snippet&q=${category}&maxResults=30`
    getVideosByCategory({ query })
      .then(setVideos)
  }, [category])
  return (
    <Stack
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
      <Box flex={1} px={2} pr={4}>
        <Typography variant='h4' component='h1' py={2}> {category}
          <Typography variant='h4' component='span' color='#FC1503'> videos </Typography>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            hola
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            hola
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            hola
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            hola
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            hola
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}
