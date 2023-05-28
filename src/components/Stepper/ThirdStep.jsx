import React from 'react';
import useAppContext from '../../hooks/useAppContext';
import { Box, Grid, Typography } from '@mui/material';
import FrameLensCard from './FrameLensCard';
import FrameLensColorCard from './FrameLensColorCard';

function ThirdStep() {
  const { designedGlasses, selectedGlasses } = useAppContext();

  console.log(designedGlasses);

  return (
    <Box sx={{ marginTop: '50px' }}>
      <Typography variant="h6" mb="30px">
        Select lens
      </Typography>
      <Grid container spacing={3} direction={'row'}>
        {selectedGlasses?.frame_lenses?.map((f) => {
          return (
            <Grid item key={f.id}>
              <FrameLensCard {...f} />
            </Grid>
          );
        })}
      </Grid>
      {designedGlasses?.lens && (
        <>
          <Typography variant="h6" mt="30px" mb="30px">
            Select lens color
          </Typography>
          <Grid container spacing={3} direction={'row'}>
            {designedGlasses?.lens?.lens_colors?.map((c) => {
              return (
                <Grid item key={c.id}>
                  <FrameLensColorCard {...c} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default ThirdStep;
