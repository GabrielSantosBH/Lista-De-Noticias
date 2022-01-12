import React, { useEffect, useState } from "react";  

function ListaDeNoticias (props) {
    useEffect(() => {
        props.inscrever(atualizarPagina)
    }, [])
    const [noticias,setNoticias] = useState(JSON.parse(sessionStorage.getItem("noticias"))|| [])
    function atualizarPagina(noticiasAtulizados) {
        setNoticias(noticiasAtulizados)
    }

    return(
        <ul>
            {noticias.map((noticia,index)=>{
                return(
                    <li key={index}> {noticia.titulo} {noticia.imagem} {noticia.noticia} </li>
                )
            })}
        </ul>
    )
}

export default ListaDeNoticias