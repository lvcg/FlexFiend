// Detail component
import React from 'react'
import { Typography, Stack,Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;


  return (
    <Stack gap="60px" sx={{ }}>
      Detail
    </Stack>
  )
}

export default Detail