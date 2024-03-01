import { InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const LessonTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
            <TextField label="Ad"/>
            <TextField label="Ad" variant='filled'/>
            <TextField label="Ad" variant='outlined'/>
            <TextField label="Ad" variant='standard'/>
            <TextField label="Ad" variant='outlined' size='small'/>
            <TextField label="Ad" variant='outlined' size='medium'/>
            <TextField label="Ad" variant='outlined' size='small' color='error'/>
            <TextField label="Ad" variant='outlined' helperText="Lütfen isim giriniz"/>
            <TextField label="Ad" variant='outlined' type='password'/>
            <TextField label="Ad" variant='outlined' type='password' disabled/>
            <TextField label="Ad" variant='outlined' type='password' InputProps={{readOnly:true}}/>
            <TextField label="Toplam" variant='outlined' InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>TL</InputAdornment>
                )
            }}/>
            <TextField label="Toplam" variant='outlined' InputProps={{
                endAdornment:(
                    <InputAdornment position='end'>TL</InputAdornment>
                )
            }}/>
        </Stack>
        <Stack direction="row">
              <TextField onChange={(e) => setValue(e.target.value)} value={value} label="Şifre" variant='outlined' 
                  type='password' helperText={!value ? 'Lütfen şifrenizi giriniz' : 'Şifrenizi kimseyle paylaşmayınız'} />
        </Stack>
    </Stack>
  )
}

export default LessonTextField