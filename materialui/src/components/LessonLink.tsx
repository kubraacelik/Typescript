import { Box, Link, Stack } from '@mui/material'
import React from 'react'

export const LessonLink = () => {
    return (
        <Stack>
            <Link href="https://bento.me/fkubracelik">Web Siteme Git</Link>
            <Link href="https://bento.me/fkubracelik" color='error'>Web Siteme Git</Link>
            <Link href="https://bento.me/fkubracelik" color='error' variant='body2'>Web Siteme Git</Link>
            <Link href="https://bento.me/fkubracelik" underline='none'>Web Siteme Git</Link>
            <Link href="https://bento.me/fkubracelik" underline='hover'>Web Siteme Git</Link>
            <Link href="#" onClick={() => {
                console.log("Kübra Çelik");
            }}>Web Siteme Git</Link>
        </Stack>
    )
}
