import { Stack, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import {DateRangePicker, DateRange} from '@mui/x-date-pickers-pro/DateRangePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';

export const LessonDateRange = () => {
  const [value, setValue] = useState<Dayjs | null>(null)
  return (
    <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker 
                label='Time'
                value={value}
                onChange={(newValue)=>{
                    setValue(newValue)
                }}
                />
            </LocalizationProvider>
        </Stack>
  )
}
