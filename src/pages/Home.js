//Home page 
import React, { useState }from 'react';
import { Box } from '@mui/material';


// Components
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

// Utils
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    //Render  jsx code box wrapper w/componenets
    <Box>
      <HeroBanner />
      <Exercises 
      setExercises={setExercises} 
      bodyPart={bodyPart}
       exercises={exercises}/>
      <SearchExercises 
      setExercises={setExercises}
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home