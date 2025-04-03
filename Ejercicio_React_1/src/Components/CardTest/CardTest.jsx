import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardTest=({name, img, especies, genero})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div id='cardContent'>
              <div><b>Especies:</b> {especies}</div>
              <div><b>Genero:</b> {genero}</div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardTest;
