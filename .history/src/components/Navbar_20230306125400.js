import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    // Initial wrapper for the stack
    <Stack direction="row"
      justifyContent=""
    >
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