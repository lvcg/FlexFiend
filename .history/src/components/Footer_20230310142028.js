import React from 'react'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={logo} alt="logo" width="200px" height="40px"/>
        <Typography variant >
          Made with Love by Lvcg
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer