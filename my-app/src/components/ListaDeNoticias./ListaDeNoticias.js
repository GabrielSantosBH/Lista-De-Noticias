import React, { useEffect, useState } from "react";

function ListaDeNoticias(props) {
  console.log("a lista Foi atualizado ");
  props.inscrever(atualizarPagina);

  const [noticias, setNoticias] = useState(
    JSON.parse(sessionStorage.getItem("noticias")) || []
  );


  function atualizarPagina(noticiasAtulizados) {
    setNoticias(noticiasAtulizados);
  }

  function deletar(i) {
    
    noticias.splice(i, 1);
    sessionStorage.setItem("noticias",JSON.stringify(noticias))
    setNoticias(noticias);
  


   
    
  }

  return (
    <ul>
      {noticias.map((noticia, index) => {
           console.log(noticia);
        return (
           
          <li key={index}>
            {noticia.titulo} {noticia.imagem} {noticia.noticia}
            <button
              onClick={(e) => {
                deletar(index);
              }}
              >
                  deleletar 
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListaDeNoticias;
