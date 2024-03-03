import EmailIcon from '@mui/icons-material/Email';
import { Badge, Stack } from '@mui/material';

export const LessonBadge = () => {
  return (
    // badgeContent : iconun üstünde yazacak sayı
    // max : o sayıyı geçince +'lı görünsün
    // anchorOrigin : sayının konumu nerede olsun -> vertical=dikey olarak, horizontal=yatay olarak
      <Stack direction='row' gap={10}>
        <Badge badgeContent={50} color='info'>
              <EmailIcon />
        </Badge>
          <Badge badgeContent={50} max={40} color='success'>
              <EmailIcon />
        </Badge>
        <Badge badgeContent={50} color='secondary' anchorOrigin={{
            vertical:'bottom',
            horizontal:'right'
        }}>
              <EmailIcon />
        </Badge>
        <Badge badgeContent={50} color='secondary' anchorOrigin={{
            vertical:'top',
            horizontal:'left'
        }}>
              <EmailIcon />
        </Badge>
      </Stack>
  )
}
