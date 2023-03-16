// Description: ExerciseDetail page
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from 'mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimiliarExercises from '../components/SimiliarExercises';

const ExerciseDetail = ({}) => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState({})
  const { id } = useParams()

  // Fetch exercise details
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // Fetch from exercise db api
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      // Fetch from youtube api
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search/?q=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideoData);
  }

  fetchExerciseData()
 }, [id]);


  return (
    // jsx code box wrapper w/componenets
    <Box>
      <Detail exerciseDetails={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimiliarExercises />
    </Box>
  )
}

export default ExerciseDetail