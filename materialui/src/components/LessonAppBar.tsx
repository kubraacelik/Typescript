import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import React, { useState } from 'react';

export const LessonAppBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    // anchorEl varsa true döner, yoksa false döner.Eğer true ise, menü görüntülenir; false ise gizlenir. 
    // Yani İndirimdekilere basınca açmasını sağlar
    const openControl = Boolean(anchorEl)
    console.log(openControl);

    // anchorEl'i null yapıp İndirimdekilere basınca kapanmasını sağlar
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    }

    return (
        <AppBar>
            <Toolbar>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ marginRight: 'auto' }}>Header Örneği</Typography>
                <Stack direction='row'>
                    <Button sx={{ color: 'white' }}>ANASAYFA</Button>
                    <Button sx={{ color: 'white' }}>HAKKIMIZDA</Button>
                    <Button sx={{ color: 'white' }}>ÜRÜNLER</Button>
                    <Button sx={{ color: 'white' }}>FİYATLAR</Button>
                    <Button sx={{ color: 'white' }} onClick={handleClick}>İNDİRİMDEKİLER</Button>
                </Stack>
                {/* anchorEl : Bu, menünün nerede olacağını belirten bir referanstır. */}
                <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose} sx={{ cursor: 'pointer' }}>
                    <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
                    <MenuItem onClick={handleClose}>Kalemler</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
