import React, { useState }from 'react';
import { Box } from '@mui/material';


// Components
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';


const Home = () => {
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <Exercises />
      <SearchExercises />
    </Box>
  )
}

export default Home