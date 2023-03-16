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
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // Fetch from exercise db api
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetails(exerciseDetailData);

      // Fetch from youtube api
      const exerciseVideoData = await fetchData

  }

  fetchExerciseData()
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