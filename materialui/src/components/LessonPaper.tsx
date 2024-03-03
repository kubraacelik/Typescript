import { Box, Paper } from '@mui/material'
import React from 'react'

export const LessonPaper = () => {
    return (
        // elevation={0} : gölge öezlliği verir, sayı arttıkça gölgeleme artar.
        // variant='outlined' : border değeri verir
        // square : border-radius özelliğini kaldırır
        <Box sx={{ display: 'flex', gap: 10 }}>
            <Paper sx={{ width: 100, height: 100 }} />
            <Paper sx={{ width: 100, height: 100 }} elevation={0} />
            <Paper sx={{ width: 100, height: 100 }} elevation={1} />
            <Paper sx={{ width: 100, height: 100 }} elevation={2} />
            <Paper sx={{ width: 100, height: 100 }} elevation={3} />
            <Paper sx={{ width: 100, height: 100 }} variant='outlined' />
            <Paper sx={{ width: 100, height: 100 }} variant='outlined' square/>
            <Paper sx={{ width: 100, height: 100 }} variant='elevation' />
        </Box>
    )
}
