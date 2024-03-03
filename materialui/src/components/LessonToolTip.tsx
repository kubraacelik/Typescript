import { IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const LessonToolTip = () => {
    return (
        // placement : Yazının konumu nerede olsun
        // title : Iconun üstüne gelince ne yazsın
        <Tooltip title='Sil' placement='right'>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}
