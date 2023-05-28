import React from 'react';
import { Box, Grid } from '@mui/material';
import FrameCard from './FrameCard';

const FirstStep = ({ frames }) => {
  return (
    <Box sx={{ marginTop: '50px' }}>
      <Grid container spacing={3} direction={'row'}>
        {frames.map((f) => {
          return (
            <Grid item key={f.id}>
              <FrameCard {...f} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FirstStep;
