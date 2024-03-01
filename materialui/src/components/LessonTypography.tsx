import { Typography } from '@mui/material';

const LessonTypography = () => {
  return (
    <div>
        <Typography variant='body1'>Body1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Cumque et rem dolores deserunt repudiandae sapiente dolorum, odit nulla nesciunt ab, blanditiis 
        id ipsam sunt, incidunt obcaecati repellendus libero explicabo consequatur!</Typography>
        <Typography variant='body2'>Body2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Cumque et rem dolores deserunt repudiandae sapiente dolorum, odit nulla nesciunt ab, blanditiis 
        id ipsam sunt, incidunt obcaecati repellendus libero explicabo consequatur!</Typography>
        <Typography variant='h1'>H1 GÖRÜNÜMÜ</Typography>
        <Typography variant='h2'>H2 GÖRÜNÜMÜ</Typography>
        <Typography variant='h3'>H3 GÖRÜNÜMÜ</Typography>
        <Typography variant='h4'>H4 GÖRÜNÜMÜ</Typography>
        <Typography variant='h5'>H5 GÖRÜNÜMÜ</Typography>
        <Typography variant='h6'>H6 GÖRÜNÜMÜ</Typography>
        <Typography variant='h1' component="h4">HEY</Typography>
        <Typography variant='h1' component="h4" align='left'>HEY</Typography>
        <Typography variant='h1' component="h4" align='right'>HEY</Typography>
        <Typography variant='subtitle1'>Başlık 1</Typography>
        <Typography variant='subtitle2'>Başlık 2</Typography>
    </div>
  )
}

export default LessonTypography