import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { defaultChannelTitle, defaultChannelUrl, defaultVideoTitle, defaultVideoUrl } from '../utils/constants'

export const VideoCard = ({ videoId, thumbnails, title, channelId, channelTitle }) => {
  return (
    <Card>
      <Link to={videoId ? `/videos/${videoId}` : defaultVideoUrl}>
        <CardMedia
          image={thumbnails?.high?.url}
          alt={title}
          sx={{ width: '100%', aspectRatio: '16/9' }}
        />
      </Link>
      <CardContent sx={{
        backgroundColor: '#1e1e1e',
        height: '116px'
      }}
      >
        <Link to={videoId ? `/videos/${videoId}` : defaultVideoUrl} title={title}>
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            color='#fff'
            overflow='hidden'
            sx={{
              maxHeight: '3.3rem',
              WebkitLineClamp: '2',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal'
            }}
          >
            {title.slice(0, 50) || defaultVideoTitle}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : defaultChannelUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='gray' display='flex' alignItems='center'>
            {channelTitle.slice(0, 50) || defaultChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: 1 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
