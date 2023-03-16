import React from 'react';
import { Box, Stack, Typography, Button, } from '@mui/material';

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
            sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        >
            Sweat, Smile <br /> Repeat
        </Typography>
        <Typography fontSize="22px" lineheight="35px" mb={2}>
            Check out the other workouts
        </Typography>
        <Button variant="contained" color="error" href="#exercises">
            Explore Exercises 
        </Button>
        <img 
    </Box>
  )
}

export default HeroBanner