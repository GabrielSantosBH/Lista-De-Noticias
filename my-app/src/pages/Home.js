import React from 'react';
import CadastrarNovaNoticia from '../components/CadastrarNovaNoticia/CadastrarNovaNoticia';
import ListaDeNoticias from '../components/ListaDeNoticias./ListaDeNoticias';
import Noticia from '../dados/noticia';


function Home() {
 const noticia = Noticia()

  return (
    <div >
      <h1>test</h1>
      <CadastrarNovaNoticia criarNoticia={noticia.adicinarNoticia}/>
      <ListaDeNoticias apagarNoticias={noticia.apagarNoticia}  noticias={noticia}/>
      
    </div>)
  
}

export default Home;
