// Description: Displays a list of exercises for a given body part
import React, { useEffect, useState } from 'react';

// Components
import { Pagination } from '@mui/material/Pagination';
import  { Box, Stack, Typography } from '@mui/material';

// Utils
import { exerciseOptions, fetchData } from '../utils';

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
            <p></p>exercise.name)}

        </Stack>
    </Box>
  )
}

export default Exercises