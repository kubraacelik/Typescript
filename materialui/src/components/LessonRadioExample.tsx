import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const LessonRadioExample = () => {
    const [value, setValue] = useState("")
    const [helperText, setHelperText] = useState("")
    const [error, setError] = useState(false)

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
     }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value === "canboz") { 
            setHelperText('Doğru Cevap')
            setError(false)
        }
        else if (value === "tcanboz") {
            setHelperText('Bu Da Doğru Cevap')
            setError(false)
         }
        else {
            setHelperText('Lütfen Seçim Yapınız')
            setError(true)
         }
    }
  return (
      <form onSubmit={handleSubmit}>
          <FormControl error={error}>
              <FormLabel>En Kapsamlı Frontend Eğitimini Veren Eğitmen Kim?</FormLabel>
              <RadioGroup onChange={handleRadioChange}>
                  <FormControlLabel label="Can Boz" value="canboz" control={<Radio />} />
                  <FormControlLabel label="Can Boz" value="tcanboz" control={<Radio />} />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              <Button type='submit' variant='outlined'>Gönder</Button>
        </FormControl>
      </form>
  )
}
