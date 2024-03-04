import { DatePicker } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export const LessonDateTime = () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    return (
        // renderInput : içerisindeki text'ten değeri alıp okuma işlemini yapar
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={value}
                    onChange={(newValue: any) => {
                        setValue(newValue)
                    }}
                    label='Tarih'
                    renderInput={(params: any) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
            <DatePicker
                label="Controlled picker"
                value={value}
                onChange={(newValue:any) => setValue(newValue)}
            />
        </Stack>
    );
}