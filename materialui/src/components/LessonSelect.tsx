import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export const LessonSelect = () => {

  const [value, setValue] = useState<string[]>([])

  console.log(value);

  return (
    <Box width="250px">
      {/* <TextField label="Ülke Seçiniz" select fullWidth value={value} onChange={(e) => setValue(e.target.value)}>
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField> */}
      <TextField SelectProps={{
        multiple: true,
      }} label="Ülke Seçiniz" select fullWidth value={value} onChange={(e) => setValue(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}>
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField>

    </Box>
  )
}
