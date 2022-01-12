
import CadastrarNovaNoticia from '../components/CadastrarNovaNoticia/CadastrarNovaNoticia';
import ListaDeNoticias from '../components/ListaDeNoticias./ListaDeNoticias';


function Home() {
  const escritos = []
  console.log("home foi atualizada")

  function increver (func){
    escritos.push(func)
  }

  function notificar (atulizado){
    escritos.forEach(func=>func(atulizado))
  }

  return (
    <div className="App">
     
      <CadastrarNovaNoticia notificar={notificar}/>
      <ListaDeNoticias inscrever={increver}/>
      
    </div>
  );
}

export default Home;
