import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm}
    }}>
        <Typography color="#FF2625" fontweight="600" fontSize="26px">
            Fitness Club
        </Typography>
    </Box>
  )
}

export default HeroBanner