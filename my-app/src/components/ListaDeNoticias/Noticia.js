import React from "react";


import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";


export default function Noticias(props) {
  return (

    <Container >
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Foto da Noticia "
          height="140"
          image={props.image}
          title={props.titulo}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.noticia}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
  );
}
