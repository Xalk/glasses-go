import { Box } from '@mui/material';
import React from 'react';
import OrderForm from './OrderForm';

const FourthStep = ({ handleNext }) => {
  return (
    <Box>
      <OrderForm handleNext={handleNext} isPremade={false} />
    </Box>
  );
};

export default FourthStep;
