import { Box, Grid } from '@mui/material'
import React from 'react'

export const LessonGrid = () => {
    return (
        <Box>
            <Grid container>
                <Grid xs={12} md={8} >8 birimlik yer</Grid>
                <Grid xs={12} md={4}>4 birimlik yer</Grid>
                <Grid xs={12} md={8} >8 birimlik yer</Grid>
                <Grid xs={12} md={4}>4 birimlik yer</Grid>
            </Grid>
        </Box>
    )
}
