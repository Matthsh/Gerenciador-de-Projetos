import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  /* AULA DE INTRODUÇÃO AO REACT
  const name = 'Mattheus'

  const newName= name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  */

  const nome = 'Maria'

  return (
    /* AULA DE INTRODUÇÃO AO REACT
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>    
      <p>soma 2 + 2 = {2 + 2}</p>
      <p>Olá, {newName}</p>
      <p>soma 3 + 3 = {sum(3, 3)}</p>    
      <img src={url} alt="minha imagem"/>
      <HelloWorld />
    </div>
    */

   <div className="App">
    <SayMyName nome="Mattheus" />
    <SayMyName nome="João" />
    <SayMyName nome={nome} />
    <Pessoa foto="https://via.placeholder.com/150" nome="Mattheus" idade="27" profissao="Cientista" />
   </div>
    

  )
}

export default App;
