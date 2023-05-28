import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAppContext from '../../hooks/useAppContext';

export default function FrameCard({
  id,
  name,
  price,
  photo_url,
  frame_lenses,
  frame_materials,
}) {
  const { setSelectedGlasses, selectedGlasses } = useAppContext();

  const handleClick = () => {
    let obj = {
      id,
      name,
      price,
      photo_url,
      frame_lenses,
      frame_materials,
    };

    setSelectedGlasses(obj);
  };

  const isSelected = id === selectedGlasses?.id;

  return (
    <Card sx={{ minWidth: 210, border: isSelected ? '1px solid green' : '' }}>
      <CardMedia sx={{ height: 140 }} image={photo_url} title={name} />
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
