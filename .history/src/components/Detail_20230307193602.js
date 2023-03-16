// Detail component
import React from 'react'
import { Typography, Stack,Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;


  return (
    <Stack gap="60px" sx={{flexDirection: { lg:'row' }, p: '20px', alignItems:'center'}}>
      <img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
      <Stack>
        <Typography>
          {name}
        </Typography>
        <Typography>
          exercises keep you strong. {name} {''} 

          is a great exercise to help you get stronger {target}
        </Typography>    
      </Stack>
    </Stack>
  )
}

export default Detail