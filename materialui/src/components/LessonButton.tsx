import { Button,Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const LessonButton = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>
    <Stack direction='row' spacing={2}>
        <Button variant='outlined' color='error'>Text</Button>
        <Button variant='outlined' color='info'>Text</Button>
        <Button variant='outlined' color='inherit'>Text</Button>
        <Button variant='outlined' color='primary'>Text</Button>
        <Button variant='outlined' color='secondary'>Text</Button>
        <Button variant='outlined' color='success'>Text</Button>
        <Button variant='outlined' color='warning'>Text</Button>
    </Stack>
    <Stack direction="row" spacing={4}>
      <Button variant='contained' size='large'>Butonum</Button>
      <Button variant='contained' size='medium'>Butonum</Button>
      <Button variant='contained' size='small'>Butonum</Button>
    </Stack>
    <Stack direction='row' spacing={2}>
      <AddIcon color='error'/>
      <Button variant='outlined' startIcon={<AddIcon color='error'/>}>Ekle</Button>
        <Button variant='outlined' endIcon={<AddIcon color='error' onClick={() => alert('Tıklandı')} />}>Ekle</Button>
    </Stack>
    </Stack>
  )
}

export default LessonButton