import React from "react";
import CadastrarNovaNoticia from "../components/CadastrarNovaNoticia/CadastrarNovaNoticia";
import ListaDeNoticias from "../components/ListaDeNoticias/ListaDeNoticias";
import Noticia from "../dados/noticia";
import Container from "@material-ui/core/Container";
import {Typography}  from "@material-ui/core"

function Home() {
  const noticia = Noticia();

  return (
    <div>
      <Container  maxWidth="md">
        <Typography variant="h3" component="h1" align="center"  >Cadastrar Noticias </Typography>
        <CadastrarNovaNoticia criarNoticia={noticia.adicinarNoticia} />
      </Container>
      <Container maxWidth="xs">
        <ListaDeNoticias
          apagarNoticias={noticia.apagarNoticia}
          noticias={noticia}
        />
      </Container>
    </div>
  );
}

export default Home;
