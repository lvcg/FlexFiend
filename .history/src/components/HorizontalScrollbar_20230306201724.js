import React, { useContext } from 'react'
import { Box } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

// Import Components
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import 

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => 
      <Box 
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        <BodyPart item={item} bodyPart={BodyPart} setBodyPart={setBodyPart}/>
      </Box>
      )}
      </ScrollMenu>
      )}

export default HorizontalScrollbar
