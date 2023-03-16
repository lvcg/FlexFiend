// Description: Displays a list of exercises for a given body part
import React, { useEffect, useState } from 'react';

// Components
import { Pagination } from '@mui/material/Pagination';
import  { Box, Stack, Typography } from '@mui/material';

// Utils
import { exerciseOptions, fetchData } from '../utils/fetchData';

import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises" 
      sx={{mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
      >
        <Typography variant="h3" mb="46px">
          Showing Results for: {bodyPart}
        </Typography>
        <Stack direction="row" sx={{ gap: {lg: '110px', xs: '50px' }}} flexWrap="wrap" justifyContent="center" >
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
            ))}
        </Stack>
        <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            //see mui docs for pagination
            <Pagination 
              color="standard"
              shape="rounded"
              defaultPage={1}
              count
            />
          )}

        </Stack>
    </Box>
  );
};

export default Exercises