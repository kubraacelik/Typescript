import { Button, IconButton, Snackbar } from '@mui/material'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

export const LessonSnackBar = () => {
    const [openSnackBar, setOpenSnackBar] = useState(false)

    const handleClick = () => {
        setOpenSnackBar(true)
    }

    const action = (
        <React.Fragment>
            <Button onClick={()=>setOpenSnackBar(false)} color='secondary' size='small'>Geri Al</Button>
            <IconButton>
                <CloseIcon onClick={()=>setOpenSnackBar(false)} sx={{ color: 'red' }} />
            </IconButton>
        </React.Fragment>
    )

    return (
        <div>
            {/* autoHideDuration : kaç sn sonra otomatik kapansın */}
            {/* autoHideDuration'un çalışması için onClose'ta yazılmalı */}
            {/* anchorOrigin : mesajın konumu */}
            <Button onClick={handleClick}>Snackbar'ı Aç</Button>
            <Snackbar
                open={openSnackBar}
                message='Hata Mesajı Aldınız'
                action={action}
                autoHideDuration={2000}
                onClose={()=>setOpenSnackBar(false)}
                anchorOrigin={{vertical:'bottom', horizontal:'center'}}
            />
        </div>
    )
}
