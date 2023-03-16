// Description: BodyPart component - Card body part
import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop:  bodyPart === item ? '4px solide #ff2625' : 'none',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer', gap: '47px',
            }}
    >
        <img src={Icon} alt="dumbbell" stles={{ width: '40px', height:'40px',  }}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart