import { Stack } from '@mui/material'
import Logo from '../images/logo.webp'
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export const Navbar = props => {
  return (
    <Stack
      zIndex={100}
      maxWidth='1200px'
      mx='auto'
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      position='sticky'
      top={0}
      bgcolor='black'
      p={1}
      sx={{
        pr: { sm: 5 }
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt='Logo de youtube clone' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}
