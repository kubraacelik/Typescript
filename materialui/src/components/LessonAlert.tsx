import { Alert, AlertTitle, Stack } from '@mui/material'
import React from 'react'

export const LessonAlert = () => {
    return (
        // severity : renk ayarlar
        <Stack spacing={2}>
            <Alert>
                <AlertTitle>Başarılı Mesajı</AlertTitle>
                Başarılı
            </Alert>
            <Alert severity='error'>
                <AlertTitle>Hata Mesajı</AlertTitle>
                Hata
            </Alert>
            <Alert severity='info'>
                <AlertTitle>Alarm Mesajı</AlertTitle>
                Alarm
            </Alert>
            <Alert severity='warning'>
                <AlertTitle>Tehlike Mesajı</AlertTitle>
                Tehlike
            </Alert>
        </Stack>
    )
}
