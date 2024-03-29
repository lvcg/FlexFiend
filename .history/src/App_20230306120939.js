import React from 'react'

// Router imports for Home page
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css'
import 

const App = () => {
  return (
    <Box width="400px">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />   
        </Routes>
    </Box>
  )
}

export default App