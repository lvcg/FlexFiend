// This is a simple component that will be used to show a loading indicator
import React from 'react'
import { Stack } from @mui/material;
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <Infinity
    </Stack>
  )
}

export default Loader