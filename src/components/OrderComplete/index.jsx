import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import orderComplete from '../../assets/order-complete.png';

function OrderComplete() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={orderComplete}
        alt="order-complete"
        style={{ marginTop: '50px' }}
      />
      <Typography
        maxWidth="500px"
        sx={{
          margin: '50px auto',
          textAlign: 'center',
        }}
      >
        Thank you for providing all the necessary information. Your order has
        been successfully submitted! We will process your order as soon as
        possible. If we require any further information or have any updates
        regarding your order, we will contact you via the provided phone number.
      </Typography>
      <Button onClick={handleHomeClick}>Go to home</Button>
    </Box>
  );
}

export default OrderComplete;
