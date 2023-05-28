import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAppContext from '../../hooks/useAppContext';

let lensImages = {
  cr_39: '/lens-materials-images/cr_39.png',
  glass: '/lens-materials-images/glass.png',
  trivex: '/lens-materials-images/trivex.png',
  high_index: '/lens-materials-images/high_index.png',
  polycarbonate: '/lens-materials-images/polycarbonate.png',
};

export default function FrameLensCard({ id, name, price, lens_colors }) {
  const { setDesignedGlasses, designedGlasses } = useAppContext();

  const handleClick = () => {
    let obj = {
      id,
      name,
      price,
      lens_colors,
    };

    setDesignedGlasses((prev) => ({ ...prev, lens: obj }));
  };

  const isSelected = id === designedGlasses?.lens?.id;

  return (
    <Card sx={{ minWidth: 210, border: isSelected ? '1px solid green' : '' }}>
      <CardMedia
        sx={{ height: 140, backgroundColor: 'blueviolet' }}
        title={name}
        image={lensImages[`${name.toLowerCase()}`]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Select ${price}
        </Button>
      </CardActions>
    </Card>
  );
}
