import { Divider, Stack } from '@mui/material'
import React from 'react'

export const LessonStack = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }}
            justifyContent='center'
            alignItems='center'
            spacing={{ xs: 1, sm: 2, md: 3 }}
            divider={<Divider orientation='vertical' flexItem />}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </Stack>
    )
}
