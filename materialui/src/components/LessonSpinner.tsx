import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

export const LessonSpinner = () => {
    return (
        <Stack spacing={2}>
            {/* CircularProgress : yuvarlak yükleniyor sembolü */}
            {/* variant='determinate' value={25} : %25'i doldu demek */}
            {/* LinearProgress : düz çizgi şeklinde yükleniyor sembolü */}
            <CircularProgress />
            <CircularProgress color='error' />
            <CircularProgress color='success' />

            <CircularProgress variant='determinate' value={25} color='secondary' />

            <LinearProgress />
            <LinearProgress color='error' />
            <LinearProgress color='inherit' />

            <LinearProgress variant='determinate' value={75} />
        </Stack>
    )
}
