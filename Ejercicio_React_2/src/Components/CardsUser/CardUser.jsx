import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CardUser.css";

const CardUser=({user})=> {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        // height="140"
        image={user.avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.login}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <b>Tipo: </b>{user.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href={user.url}>ver usuario</a></Button>                
        
      </CardActions>
    </Card>
  );
}
export default CardUser;
