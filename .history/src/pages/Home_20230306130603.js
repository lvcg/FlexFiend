import React, { useState }from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';



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