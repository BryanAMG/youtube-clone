import { Stack } from '@mui/material'
import Logo from '../images/logo.webp'
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export const Navbar = props => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      position='sticky'
      top={0}
      bgcolor='black'
      p={1}
      sx={{
        mr: { sm: 5 }
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt='Logo de youtube clone' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}
