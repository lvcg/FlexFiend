import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px"
    >
        <Typography color="#FF2625" fontweight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        >
            Sweat, Smile <br /> Repeat
        </Typography>
        <Typography>
            Check out the other workouts
        </Typography>
    </Box>
  )
}

export default HeroBanner