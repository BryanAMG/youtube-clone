import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Feed } from './pages/Feed'

function App () {
  return (
    <Router>
      <Box bgcolor='black' color='white' height='100vh'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/channel/:id' element={<div> Channel </div>} />
          <Route path='/videos/:id' element={<div> Videos </div>} />
          <Route path='/search/:query' element={<div> Search </div>} />
        </Routes>
      </Box>

    </Router>
  )
}

export default App
