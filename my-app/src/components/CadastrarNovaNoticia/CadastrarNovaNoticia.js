import React, { useState } from "react";

function CadastrarNovaNoticia(props) {
  console.log("cadastro foi atualizado com susseso ");

  const [titulo, setTitulo] = useState("");
  const [noticia, setNoticia] = useState("");
  const [imagem, setImagem] = useState("");

  function quardarNoticias() {
    // pegar dados
    // tranformei em dados
    const dados = {
      titulo: titulo,
      notica: noticia,
      imagem: imagem,
    };
    //atualizar os dados no storege

    const storege = JSON.parse(sessionStorage.getItem("noticias")) || [];
    storege.push(dados);
    sessionStorage.setItem("noticias", JSON.stringify(storege));

    props.notificar(storege);

    alert("enviado com susseso ");
    console.log(storege);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        quardarNoticias();
      }}
    >
      <input
        type="text"
        placeholder="Titulo da Noticia "
        onChange={(e) => {
          e.preventDefault();
          setTitulo(e.target.value);
        }}
      />

      <textarea
        placeholder="Noticia"
        onChange={(e) => {
          setNoticia(e.target.value);
        }}
      >
        {" "}
      </textarea>

      <input
        type="text"
        placeholder="imagem"
        onChange={(e) => {
          setImagem(e.target.value);
        }}
      />

      <button>Cadastrar Noticia </button>
    </form>
  );
}

export default CadastrarNovaNoticia;
