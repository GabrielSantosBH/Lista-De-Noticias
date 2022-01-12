import React from "react";

function CadastrarNovaNoticia(props) {
  let titulo = "";
  let imagem = "";
  let notica = "";
  function hendleTitulo(e) {
    titulo = e;
  }
  function hendleImagem(e) {
    imagem = e;
  }
  function hendleNoticia(e) {
    notica = e;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          props.criarNoticia({ titulo, imagem, notica });
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => {
            hendleTitulo(e.target.value);
          }}
          type="text"
          placeholder="Titulo"
          required
        />
        <input
          onChange={(e) => {
            hendleImagem(e.target.value);
          }}
          type="text"
          placeholder="https://alguma imagem web"
          required
        />
        <textarea
          onChange={(e) => {
            hendleNoticia(e.target.value);
          }}
        >
          
          noticia
        </textarea>
        <button type="submit">add</button>
      </form>
    </>
  );
}

export default CadastrarNovaNoticia;
