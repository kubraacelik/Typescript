import CopyIcon from '@mui/icons-material/ContentCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

export const LessonSpeedDial = () => {
    return (
        // ariaLabel : Menünün ne hakkında olduğunu belirtir
        // tooltipTitle : Iconun yanında yazacak yazı
        // tooltipOpen : true ise, bilgi penceresi varsayılan olarak açık olacaktır
        <SpeedDial ariaLabel='Navigation' icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' tooltipOpen />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' tooltipOpen />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' tooltipOpen />
        </SpeedDial>
    )
}
