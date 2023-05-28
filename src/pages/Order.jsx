import { Box } from '@mui/material';
import React from 'react';
import OrderForm from '../components/Stepper/OrderForm';
import { useState } from 'react';
import OrderComplete from '../components/OrderComplete';

function Order() {
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  return (
    <Box>
      {isOrderComplete ? (
        <OrderComplete />
      ) : (
        <OrderForm
          isPremade={true}
          isOrderComplete={isOrderComplete}
          setisOrderComplete={setIsOrderComplete}
        />
      )}
    </Box>
  );
}

export default Order;
