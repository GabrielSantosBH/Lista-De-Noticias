import React, { useEffect, useState } from "react";

function ListaDeNoticias(props) {
  const [noticias,setNoticias] = useState([])

  
  useEffect(()=>{
    props.noticias.increver(atualizar)

    return function clear (){
      props.noticias.desinscrever(atualizar)
    }
})

  function atualizar(NovaNoticia){
    setNoticias([...noticias,NovaNoticia])
  }
  return (
    <>
      <ul>
        {props.noticias.noticias.map((noticia, index) => {
          return (
            <li key={index}>
              {(noticia.titulo, noticia.imagem, noticia.notica)}
              <button onClick={props.apagarNoticias(index)}> deletar </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListaDeNoticias;
