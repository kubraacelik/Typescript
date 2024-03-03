import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useState } from 'react'

export const LessonDialog = () => {
    const [value, setValue] = useState(false)
    return (
        <>
        <Button onClick={()=>setValue(true)}>Dialogu Aç</Button>
        <Dialog open={value} onClose={()=>setValue(false)}>
            <DialogTitle>Hangisini Seviyorsun?</DialogTitle>
            <DialogContent>
                <DialogContentText>Frontend frameworklerinden hangisini seviyorsunuz?</DialogContentText>
                <DialogActions>
                    <Button onClick={()=>setValue(false)}>Angular</Button>
                    <Button onClick={()=>setValue(false)}>React JS</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
        </>
    )
}
