import React from 'react'
import {DataComing} from "./propstypes"

function Home(props:DataComing) {
  return (
    <div>{props.name} eğitimine hoşgeldiniz. Kurs sayısı : {props.courseNumber}
         {props.isBest ? <p>En iyi eğitim budur</p> : <p>En iyi eğitim değil</p>}
    </div>
  )
}

export default Home