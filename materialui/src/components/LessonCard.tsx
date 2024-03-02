import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const LessonCard = () => {
    return (
        <Card sx={{ width: '350px' }}>
            {/* Kart Resmi */}
            <CardMedia height='150px' component="img" image='https://source.unsplash.com/random' />
            {/* Kart İçeriği */}
            <CardContent>
                <Typography variant='h5' component='div'>
                    Başlığım
                </Typography>
                <Typography variant='body2' component='p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid iusto perspiciatis libero voluptas quisquam corrupti
                    sunt quos cumque ab maiores laudantium impedit odit magnam dolore
                    reprehenderit officia, eos obcaecati deserunt.
                </Typography>
            </CardContent>
            {/* Kart Aksiyonları */}
            <CardActions>
                <Button color='error'>Temizle</Button>
                <Button>Kaydet</Button>
            </CardActions>
        </Card>
    )
}
