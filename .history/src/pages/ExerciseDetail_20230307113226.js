// Description: ExerciseDetail page
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from 'mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimiliarExercises from '../components/SimiliarExercises';

const ExerciseDetail = ({}) => {
  const [exerciseDetails, setExerciseDetails] = useState({})
  const { id } = useParams()

  // Fetch exercise details
  useEffect(() => {
    const fetchExercise
  }, [id]);


  return (
    // jsx code box wrapper w/componenets
    <Box>
      <Detail exerciseDetails={}/>
      <ExerciseVideos />
      <SimiliarExercises />
    </Box>
  )
}

export default ExerciseDetail