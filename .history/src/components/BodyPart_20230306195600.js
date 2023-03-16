// Description: BodyPart component - Card body part
import React from 'react'
import { Stack, Typography } from '@mui/material'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={
            bodyPart === item ? 
                borderTop: '4px solid #ff2625',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer', gap: '47px',
            } : {
                background: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer', gap: '47px',
            } : {
                background: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer', gap: '47px',
            }
        }
    >
        <img src={Icon} alt="dumbbell" stles={{ width: '40px', height:'40px',  }}/>
    </Stack>
  )
}

export default BodyPart