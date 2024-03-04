import { Stack, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';

export const LessonDateTime = () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    console.log(value);
    
    return (
        // renderInput : içerisindeki text'ten değeri alıp okuma işlemi yapar
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue)
                    }}
                    label='Tarih'
                    renderInput={(params: any) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Stack>
    )
}
