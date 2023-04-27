import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Feed } from './pages/Feed'
import { ChannelDetail } from './pages/ChannelDetail'
import { VideoDetail } from './pages/VideoDetail'
import { SearchFeed } from './pages/SearchFeed'

function App () {
  return (
    <Router>
      <Box
        bgcolor='black' color='white' minHeight='100vh' sx={{
          height: { md: '100vh' }
        }}
      >
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/videos/:id' element={<VideoDetail />} />
          <Route path='/search/:query' element={<SearchFeed />} />
        </Routes>
      </Box>

    </Router>
  )
}

export default App
