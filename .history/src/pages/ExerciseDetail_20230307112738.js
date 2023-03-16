// Description: ExerciseDetail page
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from 'mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import Detail

const ExerciseDetail = ({}) => {
  return (
    // jsx code box wrapper w/componenets
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimiliarExercises />
    </Box>
  )
}

export default ExerciseDetail