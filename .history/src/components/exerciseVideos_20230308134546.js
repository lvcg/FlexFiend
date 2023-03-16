// Purpose: To display the exercise videos
import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px'}}} p="20px">
      <Typography variant="h4" mb="33px">
        {name} Videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          gap: { lg: '110px', xs: '0' },
          flexDirection: { lg: 'row' }
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnail} alt={item.video.title} />
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos