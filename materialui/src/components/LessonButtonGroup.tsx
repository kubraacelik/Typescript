import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const LessonButtonGroup = () => {
  return (
    <Stack direction="row" spacing={5}>
        <ButtonGroup variant='contained'>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined'>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
        </ButtonGroup>
        <ButtonGroup variant='text'>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined' orientation='vertical'>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
          </ButtonGroup>
    </Stack>
  )
}

export default LessonButtonGroup