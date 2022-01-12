export default function Noticia() {
  var noticias = JSON.parse(localStorage.getItem("noticias")||[]) ;
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
  function notificar() {
    escritos.forEach((func) => func(noticias));
  }

  function adicinarNoticia(NovaNoticia) {
    const noticasAtulizada = [...noticias,NovaNoticia]
    noticias = noticasAtulizada
    console.log(noticias);
    atualizarStorage(noticias);
    notificar();
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
