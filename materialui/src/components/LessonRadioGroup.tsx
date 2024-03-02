import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const LessonRadioGroup = () => {
    const [value, setValue] = useState('')
    console.log(value);

  return (
    <FormControl>
        <FormLabel>Maaş Beklentisi</FormLabel>
          <RadioGroup row name='extected-salary' value={value} onChange={(e) => setValue(e.target.value)}>
              <FormControlLabel label="2000$" value="2000" control={<Radio />} />
              <FormControlLabel label="3000$" value="3000" control={<Radio />} />
              <FormControlLabel label="4000$" value="4000" control={<Radio />} />
        </RadioGroup>
          <FormHelperText>Yanlış Seçim</FormHelperText>
    </FormControl>
  )
}

export default LessonRadioGroup