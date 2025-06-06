import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Students = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth:200 }}>
    <CardActionArea>
      <CardMedia
        sx={{ borderRadius: '50%', width: 140, height: 140, margin: 2, boxShadow: 3 }}      // component="img"                
        component="img"
        height="140"
        image={item.imagen}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.nombre}{item.apellido}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <b>Edad</b>: {item.edad}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default Students