import React from 'react'
import {RequestProps} from "./propstypes"

function Request(props:RequestProps) {
    let message = "";

    if(props.status==='loading'){
        message="Yükleniyor..."
    }
    if(props.status==='success'){
        message="Başarılı"
    }
    if(props.status==='error'){
        message="Hata"
    }

  return (
    <div>
        {message}
    </div>
  )
}

export default Request