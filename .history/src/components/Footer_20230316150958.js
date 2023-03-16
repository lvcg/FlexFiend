import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={logo} alt="logo" width="200px" height="40px"/>
        <Typography variant="h5" pb="40px" mt="40px">
          Made with Love by Lvcg
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer