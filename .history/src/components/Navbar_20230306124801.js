import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin:'0 20px'}} />
      </Link>
      <Stack>
        <Link to="/" style={{ textDecoration: 'none', color: ""}}>Home</Link>
        <a herf="#exercises" style={{textDecoration: 'none', color:'#3a1212'}}>Exercises</a>
      </Stack>
    </Stack >
  )
}

export default Navbar