import React from 'react'

// Router imports for Home page
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';

// Import Css file
import './App.css'

// Import Pages
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';

// Import Navbar & Footer
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}}>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />   
        </Routes>
        <Footer />
    </Box>
  )
}

export default App