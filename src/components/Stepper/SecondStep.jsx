import React from 'react';
import useAppContext from '../../hooks/useAppContext';
import { Box, Grid, Typography } from '@mui/material';
import FrameMaterialCard from './FrameMaterialCard';
import FrameMaterialColorCard from './FrameMaterialColorCard';

const SecondStep = () => {
  const { selectedGlasses, designedGlasses } = useAppContext();

  console.log(selectedGlasses);
  return (
    <Box sx={{ marginTop: '50px' }}>
      <Typography variant="h6" mb="30px">
        Select frame material
      </Typography>
      <Grid container spacing={3} direction={'row'}>
        {selectedGlasses?.frame_materials?.map((f) => {
          return (
            <Grid item key={f.id}>
              <FrameMaterialCard {...f} />
            </Grid>
          );
        })}
      </Grid>
      {designedGlasses?.frameMaterial && (
        <>
          <Typography variant="h6" mt="30px" mb="30px">
            Select frame color
          </Typography>
          <Grid container spacing={3} direction={'row'}>
            {designedGlasses?.frameMaterial?.material_colors?.map((c) => {
              return (
                <Grid item key={c.id}>
                  <FrameMaterialColorCard {...c} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default SecondStep;
