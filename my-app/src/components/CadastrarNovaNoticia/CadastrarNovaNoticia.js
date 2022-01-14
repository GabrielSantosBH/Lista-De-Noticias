import React, { useState } from "react";
import "./estilo.css"
import { TextField,TextareaAutosize,Button  } from "@material-ui/core"

function CadastrarNovaNoticia(props) {
  const [titulo,setTitulo] = useState("");
  const [imagem ,setImagem] = useState("");
  const  [notica,setNotica]= useState( "nova Noticia" ) ;
  function hendleTitulo(e) {
    setTitulo(e);
  }
  function hendleImagem(e) {
    setImagem ( e );
  }
  function hendleNoticia(e) {
    setNotica( e);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          props.criarNoticia({ titulo, imagem, notica });
          e.preventDefault();
        }}
      >
        <TextField 
        value={titulo}
        fullWidth
        id="titrulo" 
        label="Titulo Da Notica " 
        margin="normal"
          onChange={(e) => {
            hendleTitulo(e.target.value);
          }}
          type="text"
          placeholder="Titulo"
          required
        />
        <TextField id="imagem" label="imagem" margin="normal"
        value={imagem}
        fullWidth
          onChange={(e) => {
            hendleImagem(e.target.value);
          }}
          type="text"
          placeholder="https://alguma imagem web"
          required
        />
        <textarea className="textArea"  rows="10" cols="120"
        value={notica}
          onChange={(e) => {
            hendleNoticia(e.target.value);
          }}
        ></textarea>

        <Button variant="contained" margin="normal" color="primary" type="submit" fullWidth  >Adicinar Nova Noticias </Button>
      </form>
    </>
  );
}

export default CadastrarNovaNoticia;
