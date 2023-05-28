import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import useAppContext from '../../hooks/useAppContext';
import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({
  id,
  name,
  price,
  photo_url,
  manufacturer,
}) {
  const navigate = useNavigate();

  const { setSelectedPremadeGlassesId } = useAppContext();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBuyClick = () => {
    setSelectedPremadeGlassesId(id);

    navigate('/order');
  };

  return (
    <Card sx={{ width: 320 }}>
      <CardMedia
        component="img"
        height="194"
        image={photo_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={handleBuyClick}>Buy ${price}</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Manufacturer: {manufacturer}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
