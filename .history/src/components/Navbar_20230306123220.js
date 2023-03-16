import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/assets';

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </Stack >
  )
}

export default Navbar