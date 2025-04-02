import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import "./CardPersonal.css";


const CardPersonal=({name, image, text})=> {
  return (
    <div id='Card-container'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"            
            image={image==undefined?"https://zooloexoticos.wordpress.com/wp-content/uploads/2017/05/iguana-2039719_960_720.jpg?w=640":image}
            alt="green iguana"
            sx={{maxWidth: 340}}  //con este código modifico el css del componente
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardPersonal
