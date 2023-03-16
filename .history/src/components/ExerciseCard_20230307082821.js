// Description: This component is used to display the exercise card on the home page
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        ExerciseCard
    </Link>
  )
}

export default ExerciseCard