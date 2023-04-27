import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { defaultProfilePicture } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const formatNumber = new Intl.NumberFormat('en')

export const ChannelCard = ({ channelId, thumbnails, title, subscriberCount }) => {
  const isChannelPage = subscriberCount ?? ''
  return (
    <Box
      display='grid'
      justifyContent='center'
      alignItems='center'
      sx={{
        height: '100%',
        maxHeight: '300px',
        mt: isChannelPage ? '-80px' : ''
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{ p: 0 }}
        >
          <CardMedia
            image={thumbnails?.high?.url || defaultProfilePicture}
            alt={title}
            sx={{
              borderRadius: '50%',
              width: '130px',
              aspectRatio: '1',
              mb: 2,
              mx: 'auto'
            }}
          />
          <Typography variant='h6' color='white' display='flex' alignItems='center'>
            {title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: 1 }} />
          </Typography>
          {
            isChannelPage &&
              <Typography>
                {formatNumber.format(subscriberCount)} Suscribers
              </Typography>
          }
        </CardContent>
      </Link>
    </Box>
  )
}
