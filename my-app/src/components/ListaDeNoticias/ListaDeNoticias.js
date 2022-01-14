import React, { useEffect, useState } from "react";
import Noticias from "./Noticia";

function ListaDeNoticias(props) {
  const noticias = props.noticias.noticias
  const [Atulizar,setAtulizar] = useState(1)

  console.log("lista atulizada")
  console.log(noticias)
    
  useEffect(()=>{
    props.noticias.increver(atualizar)

   return function clear (){
     props.noticias.desinscrever(atualizar)
  }
})

  

  function atualizar(NovaNoticia){
    const atualizar = Atulizar + Atulizar
    setAtulizar(atualizar)
    
  }

  return (
    <>
      <ul>
        {noticias.map((noticia, index) => {



          return (
            <li key={index}>
              <Noticias titulo={noticia.titulo} noticia={noticia.notica} image={noticia.imagem} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListaDeNoticias;
