import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStoreClick = () => {
    navigate('/products');
  };

  const handleDesignClick = () => {
    navigate('/design');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Paper sx={{ maxWidth: '500px', padding: '20px' }}>
        <Typography variant="h5" textAlign={'center'}>
          Welcome to our GlassesGo Center! Create your own unique glasses or
          explore our curated collection. Design glasses or go to the store and
          find your perfect pair. Happy exploring!
        </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-around', mt: '50px' }}
        >
          <Button onClick={handleStoreClick}>Store</Button>
          <Button onClick={handleDesignClick}>Design</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
