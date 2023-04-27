import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../services/getVideos'
import { ChannelCard } from '../components/ChannelCard'
import { Videos } from '../components/Videos'

export const ChannelDetail = () => {
  const { id } = useParams()
  const [dataChannel, setDataChannel] = useState(null)
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const queryChannel = `channels?part=snippet&id=${id}`
    const queryVideos = `search?channelId=${id}&part=snippet&order=date&maxResults=30`
    fetchFromApi({ query: queryChannel })
      .then(data => {
        if (data.length === 0) throw new Error('No existe canal')
        setDataChannel(data[0])
      })
      .catch(setError)

    fetchFromApi({ query: queryVideos })
      .then(data => setVideos(data))
  }, [])
  console.log({ error })
  if (error) return <Box height='calc(100vh - 61px)' width='100%' display='flex' justifyContent='center' alignItems='center'>{error.message}</Box>
  return (
    <Box>
      <Box>
        <div style={{
          height: '150px',
          backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
        }}
        />
        {
          dataChannel && <ChannelCard channelId={id} {...dataChannel?.snippet} {...dataChannel?.statistics} />
        }
      </Box>
      <Box sx={{
        p: { xs: 1, md: 2 }
      }}
      >
        {
          videos.length > 0 && <Videos videos={videos} />
        }
      </Box>
    </Box>
  )
}
