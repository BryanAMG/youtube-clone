import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const query = data.get('search').toLocaleLowerCase().trim()
    if (query.length < 3) return
    navigate(`/search/${query}`)
  }
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      bgcolor='white'
      sx={{
        borderRadius: 20,
        pl: 2
      }}
    >
      <input
        type='text'
        name='search'
        className='search-bar'
        placeholder='Search...'
      />
      <IconButton
        type='submit' sx={{
          color: 'red'
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}
