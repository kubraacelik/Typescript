import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationIcon from '@mui/icons-material/AddLocation';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';

export const LessonBottomNavigation = () => {
    const [value, setValue] = useState(0)
    return (
        // showLabels : yazılmazsa etiketler görünmez
        <BottomNavigation
            showLabels
            value={value}
            sx={{ width: '100%', position: 'absolute', bottom: '0' }}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
        >
            <BottomNavigationAction icon={<RestoreIcon />} label='Öncekiler' />
            <BottomNavigationAction icon={<FavoriteIcon />} label='Sevdiklerim' />
            <BottomNavigationAction icon={<LocationIcon />} label='Konumum' />
        </BottomNavigation>
    )
}
