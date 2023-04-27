import { Grid } from '@mui/material'
import { VideoCard } from './VideoCard'
import { ChannelCard } from './ChannelCard'

export const Videos = ({ videos, isColumn }) => {
  return (
    <Grid container spacing={3} columns={isColumn && 1}>
      {
        videos?.map((video, idx) => {
          return (
            <Grid
              item xs={12} sm={6} md={4}
              key={idx}
            >
              {video?.id?.videoId && <VideoCard {...video.id} {...video.snippet} />}
              {video?.id?.channelId && <ChannelCard {...video.snippet} />}
            </Grid>
          )
        })
      }
    </Grid>
  )
}
