export default function Noticia() {
  const noticias = JSON.parse(localStorage.getItem("noticias"))||[] 
  var escritos = [];

  function increver(func) {
    escritos.push(func);
  }

  function atualizarStorage(e) {

    localStorage.setItem("noticias",JSON.stringify(e));
  }

  function desinscrever(func) {
    escritos = escritos.filter((f) => f !== func);
  }

  function notificar(noticias) {
    escritos.forEach((func) => {
      func(noticias)
    });
  }

  function adicinarNoticia(NovaNoticia) {
    
    noticias.push(NovaNoticia)
    atualizarStorage(noticias);
    notificar(noticias);


  }
  function apagarNoticia(index) {
    noticias.splice(index, 1);
    atualizarStorage(noticias);
  }

  return {
    increver,
    desinscrever,
    notificar,
    adicinarNoticia,
    apagarNoticia,
    noticias,
  };
}
