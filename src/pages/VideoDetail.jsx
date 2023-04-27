import { Box, Grid, Stack, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'
import { fetchFromApi } from '../services/getVideos'
import { Loader } from '../components/Loader'
import { Videos } from '../components/Videos'

export const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const queryVideo = `videos?part=snippet,statistics&id=${id}`
    const queryVideos = `search?part=snippet&relatedToVideoId=${id}&type=video`
    fetchFromApi({ query: queryVideo })
      .then((data) => setVideoDetail(data[0]))

    fetchFromApi({ query: queryVideos })
      .then(setVideos)
  }, [id])
  if (!videoDetail?.snippet) return <Loader />
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail
  return (
    <Box minHeight='calc(100vh - 61px)'>
      <Grid container columns={{ xs: 1, md: 3 }} height='100%'>
        <Grid item xs={1} md={2} p={2}>
          <Box sx={{ position: 'sticky' }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=7sdf-MwzfEA' width='100%' height='100%' className='react-player' controls />
            <Typography color='#fff' fontSize={20} fontWeight='bold' px={2} py={1}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={1} px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center' overflow='auto' maxHeight='calc(100vh - 61px)'>
          <Videos videos={videos} isColumn />
        </Grid>
      </Grid>
    </Box>
  )
}
