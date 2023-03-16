// Description: BodyPart component - Card body part
import React from 'react'
import { Stack, Typography } from '@mui/material'

const BodyPart = () => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className
    >
        <img src={Icon} alt="dumbbell" stles={{ width: '40px', height:'40px',  }}/>
    </Stack>
  )
}

export default BodyPart