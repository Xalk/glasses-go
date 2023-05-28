import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAppContext from '../../hooks/useAppContext';

let materialImages = {
  wood: '/frame-materials-images/wood.png',
  plastic: '/frame-materials-images/plastic.png',
  titanium: '/frame-materials-images/titanium.png',
  metal: '/frame-materials-images/metal.png',
  acetate: '/frame-materials-images/acetate.png',
};

export default function FrameMaterialCard({
  id,
  name,
  price,
  photo_url,
  material_colors,
}) {
  const { setDesignedGlasses, designedGlasses } = useAppContext();

  const handleClick = () => {
    let obj = {
      id,
      name,
      price,
      photo_url,
      material_colors,
    };

    setDesignedGlasses((prev) => ({ ...prev, frameMaterial: obj }));
  };

  const isSelected = id === designedGlasses?.frameMaterial?.id;

  return (
    <Card sx={{ minWidth: 210, border: isSelected ? '1px solid green' : '' }}>
      <CardMedia
        sx={{ height: 140, backgroundColor: 'blueviolet' }}
        title={name}
        image={materialImages[`${name.toLowerCase()}`]}
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
