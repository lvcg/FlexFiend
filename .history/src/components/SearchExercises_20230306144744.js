import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchExercises = () => {
    // state for search input
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        if()

    }

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
                width: { lg: '800px', xs: '350px' },
                background: '#fff',
                borderRadius: '40px'

            }}
            height="76px"
            value={search}
            onChange={ (e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search for exercises"
            type="text"
             />
             <Button className="search-btn"
                sx={{
                    bgcolor: 'FF2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px'},
                    fontSize :{ lg: '20px', xs: '14px'},
                    height: '56px',
                    position: 'absolute',
                    right: '0',
                }}
                onClick={handleSearch}
             >
                Search
             </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises