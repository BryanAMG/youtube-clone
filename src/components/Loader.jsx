import { CircularProgress, Stack } from '@mui/material'

export const Loader = () => (
  <Stack justifyContent='center' alignItems='center' flex={1}>
    <CircularProgress />
  </Stack>
)
