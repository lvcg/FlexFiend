import React from 'react';
import { Box, Stack, Typography, Button, } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

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
            mb="23px" mt="30px"
        >
            Sweat, Smile <br /> Repeat
        </Typography>
        <Typography fontSize="22px" lineheight="35px" mb={2}>
            Check out the other workouts
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{ background: '#ff2625', padding:}}>
            Explore Exercises 
        </Button>
        <Typography
            fontWeight={600}
            color="#FF2625"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'},
            }}
            fontSize="200px"
        >
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner