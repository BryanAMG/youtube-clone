import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'

export const SearchBar = () => {
  return (
    <Paper
      component='form'
      onSubmit={() => {}}
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
