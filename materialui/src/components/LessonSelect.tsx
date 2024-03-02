import { Box, MenuItem, TextField } from '@mui/material'
import React from 'react'

export const LessonSelect = () => {
  return (
      <Box width="250px">
          <TextField label="Ülke Seçiniz" select fullWidth>
              <MenuItem value="TR">Türkiye</MenuItem>
              <MenuItem value="USA">ABD</MenuItem>
              <MenuItem value="FR">France</MenuItem>
        </TextField>
      </Box>
  )
}
