import { Stack } from '@mui/material'
import {LoadingButton} from '@mui/lab'
import { useState } from 'react'

export const LessonLoadingButton = () => {
    const [loading, setLoading] = useState(false)
  return (
      <Stack direction='row'>
        <LoadingButton loading>Kaydet</LoadingButton>
        <LoadingButton variant='outlined' loading={loading} onClick={()=>setLoading(true)}>Kaydet</LoadingButton>
      </Stack>
  )
}
