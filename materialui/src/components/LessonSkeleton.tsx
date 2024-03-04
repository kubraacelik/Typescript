import { Box, Skeleton } from '@mui/material'
import { useState } from 'react'

export const LessonSkeleton = () => {
    const [loading, setLoading] = useState(true)
    return (
        <Box>
            {loading ? (
                <Skeleton width={250} height={145} animation='pulse' />
            ) :
                (
                    <img
                        src='https://source.unsplash.com/random/256*144'
                        alt='skeleton'
                        width={250}
                        height={145}
                    />
                )
            }
        </Box>
    )
}
