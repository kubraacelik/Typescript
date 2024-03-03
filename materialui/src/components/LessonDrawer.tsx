import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

export const LessonDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        {/* Menü iconuna basınca açıp kapamayı sağlar */}
            <IconButton size='large' onClick={()=>setIsOpen(true)}>
                <MenuIcon />
            </IconButton>
            {/* Asıl açılıp kapanacak kısım */}
            {/* anchor : left, right, top, bottom özellikleriyle solda mı sağda mı altta mı üstte mi nerede açacağımı belli eder */}
            <Drawer anchor='bottom' open={isOpen} onClose={()=>setIsOpen(false)}>
                <Box width='250px' textAlign='center'>
                    <Typography variant='h6' component='div'>Soldaki Panel</Typography>
                </Box>
            </Drawer></>
    )
}
