//  Navbar component for the app
import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

// Import logo
import Logo from '../assets/images/Logo.png';

// Navbar component
const Navbar = () => {
  return (
    // Initial wrapper for the stack
    <Stack direction="row"
      justifyContent="space-around"
      sx={{ gap: {
        sm: '122px', xs: '40px'
      }, 
      mt: {sm: '32px', xs: '20px'},
      justifyContent: 'none'
    }} px="20px"
    >
      // Navbar Lin
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin:'0 20px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end" 
      >
        <Link to="/" style={{textDecoration: 'none', color: "#3a1212", borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a herf="#exercises" style={{textDecoration: 'none', color:'#3a1212'}}>Exercises</a>
      </Stack>
    </Stack >
  )
}

export default Navbar