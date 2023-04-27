import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

export const Sidebar = ({ category, setCategory }) => {
  return (
    <Stack
      direction='row'
      flex={1}
      overflow='auto'
      sx={{
        flexDirection: { md: 'column' },
        px: { md: 2 },
        '&::-webkit-scrollbar': { width: '5px' },
        '&:hover::-webkit-scrollbar-thumb': { bgcolor: 'rgb(114, 113, 113)' }
      }}
    >
      {categories.map(c => {
        const { icon, name } = c
        const isSelected = category === name
        const communStyle = 'category-btn'
        const activeStyle = communStyle + ' active'
        const styles = isSelected ? activeStyle : communStyle
        return (
          <button key={name} className={styles} onClick={() => setCategory({ newCategory: name })}>
            <span className='category-icon'>{icon}</span>
            <span>{name}</span>
          </button>
        )
      })}

    </Stack>
  )
}
