import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

export const LessonAvatar = () => {
    return (
        <Stack direction='row' spacing={4}>
            <AvatarGroup>
                <Avatar sx={{ marginRight: 10 }}
                    src='https://randomuser.me/api/portraits/women/2.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/50.jpg' />
            </AvatarGroup>
            <AvatarGroup max={4}>
                <Avatar
                    variant='square'
                    sx={{ marginRight: 10, bgcolor: 'turquoise', width: 50, height: 50 }}>
                    Fatih
                </Avatar>
                <Avatar
                    variant='circular'
                    sx={{ marginRight: 10, bgcolor: 'tomato', width: 60, height: 50 }}>
                    Beren
                </Avatar>
                <Avatar
                    variant='square'
                    sx={{ marginRight: 10, bgcolor: 'turquoise', width: 110, height: 50 }}>
                    Muhammed
                </Avatar>
                <Avatar
                    variant='circular'
                    sx={{ marginRight: 10, bgcolor: 'tomato', width: 60, height: 50 }}>
                    Kübra
                </Avatar>
                <Avatar
                    variant='square'
                    sx={{ marginRight: 10, bgcolor: 'turquoise', width: 110, height: 50 }}>
                    Ceren
                </Avatar>
                <Avatar
                    variant='circular'
                    sx={{ marginRight: 10, bgcolor: 'tomato', width: 60, height: 50 }}>
                    Yavuz
                </Avatar>
            </AvatarGroup>
        </Stack>
    )
}
