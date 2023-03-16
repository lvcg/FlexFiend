import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
            fontweight={700} sx={{
                fontsize: { lg: '44px', xs: '30px'}
            }} mb="50px" textAlign="center"
        >
            Awesome Exercises you <br />should try
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input: {
                     fontweight: '700',
                     border: 'none', 
                     borderRadius: '4px'
                },
                width: { lg: '1170px', xs: '350px' },
                background: '#fff',
                borderRadius: '40px'

            }}
            height="76px"
            value=""
            onChange={ (e) => {}}
            placeholder="Search for exercises"
            type="text"
             />
             <Button className="search-btn"
                sx={{
             >
                Search
             </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises