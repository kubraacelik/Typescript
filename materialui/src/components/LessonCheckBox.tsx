import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox } from '@mui/material'
import React, { useState } from 'react'

export const LessonCheckBox = () => {
    const [isAccept, setIsAccept] = useState(false)
    const [knowledge, setKnowledge] = useState<string[]>([])

    console.log(knowledge);


    const handleKnowledgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = knowledge.indexOf(event.target.value)
        if (index === -1) {
            setKnowledge([...knowledge, event.target.value])
        }
        else {
            setKnowledge(knowledge.filter((item) => item !== event.target.value))
        }
    };

    //console.log(isAccept);

    return (
        <Box>
            <Box>
                <FormControl>
                    <FormLabel>Eğitim Durumu</FormLabel>
                    <FormGroup row>
                        <FormControlLabel disabled control={<Checkbox />} label="İlkokul" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Lise" />
                        <FormControlLabel control={<Checkbox />} label="Üniversite" />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Kullanım Koşulu</FormLabel>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox checked={isAccept}
                            onChange={(e) => setIsAccept(e.target.checked)} />}
                            label="Kullanım koşullarını kabul ediyorum." />
                    </FormGroup>
                </FormControl>
            </Box>
            {/* ÇOKLU SEÇİM İÇİN */}
            <Box>
                <FormControl>
                    <FormLabel>Frontend'de Neler Biliyorsun?</FormLabel>
                    <FormGroup row>
                        <FormControlLabel value="react"
                            control={
                                <Checkbox checked={knowledge.includes('react')}
                                    onChange={handleKnowledgeChange} />
                            }
                            label="React.JS" />
                        <FormControlLabel value="angular"
                            control={<Checkbox checked={knowledge.includes('angular')}
                                onChange={handleKnowledgeChange} />
                        }
                            label="Angular" />
                        <FormControlLabel value="vue"
                            control={<Checkbox checked={knowledge.includes('vue')}
                                onChange={handleKnowledgeChange} />
                    }
                            label="Vue.JS" />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
