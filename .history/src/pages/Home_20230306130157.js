import React, { useState }from 'react';
import { Box } from '@mui/material';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <Exercises />
      <SearchExercises />
    </Box>
  )
}

export default Home