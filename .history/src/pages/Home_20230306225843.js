import React, { useState }from 'react';
import { Box } from '@mui/material';


// Components
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <Exercises 
      setExercises={setExercises} 
      bodyPart={bodyPart}
       setBodyPart={setBodyPart}/>
      <SearchExercises 
      setExercises={setExercises}
       bodyPart={bodyPart} 
       exercises={setBodyPart} />
    </Box>
  )
}

export default Home