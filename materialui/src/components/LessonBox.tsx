import { Box } from '@mui/material'
import React from 'react'

export const LessonBox = () => {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            width: '100px',
            height: '100px',
            color:'white',
            padding: '20px',
            '&:hover':{
                backgroundColor:'primary.light'
            }
        }}>
            LessonBox
        </Box>
    )
}
