import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

export const LessonAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        console.log(isExpanded);
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>İlk Bölüm</Typography>
                </AccordionSummary>
                {/* Tıklayınca Açılacak Kısım */}
                <AccordionDetails>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nemo perferendis accusantium
                    facilis praesentium! Eligendi ab rem, dolorum molestiae fugit veniam doloremque, quaerat dolorem,
                    at voluptas autem culpa facere magni.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>İkinci Bölüm</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nemo perferendis accusantium
                    facilis praesentium! Eligendi ab rem, dolorum molestiae fugit veniam doloremque, quaerat dolorem,
                    at voluptas autem culpa facere magni.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Üçüncü Bölüm</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nemo perferendis accusantium
                    facilis praesentium! Eligendi ab rem, dolorum molestiae fugit veniam doloremque, quaerat dolorem,
                    at voluptas autem culpa facere magni.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
