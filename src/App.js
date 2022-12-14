import './App.css'
//import HelloWorld from './components/HelloWorld'
//import SayMyName from './components/SayMyName'
//import Pessoa from './components/Pessoa'
//import Frase from './components/Frase'
//import List from './components/List'
//import Evento from './components/Evento'
//import Form from './components/Form'
//import Condicional from './components/Condicional'
//import OutraLista from './components/listas/OutraLista'
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  /* AULA DE INTRODUÇÃO AO REACT
  const name = 'Mattheus'

  const newName= name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  */

  // const nome = 'Maria' //-> aula 6

  
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

    /* Até a aula 6
    <div className="App">
    <h1>Testando CSS</h1>
    <Frase />
    <SayMyName nome="Mattheus" />
    <SayMyName nome="João" />
    <SayMyName nome={nome} />
    <Pessoa foto="https://via.placeholder.com/150" nome="Mattheus" idade="27" profissao="Cientista" />
    </div>*/


    //<List /> // aula 7 e 8
    /*
    <div className="App">
      <Evento />
      <Form />
    </div>
    */

    // Aula 12
    /**
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
    */

    // Aula 13 Renderização de listas
    /** 
    const meusItems = ['React', 'Vue', 'Angular']

    return (

    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista items={meusItems} />
    </div>
  )
  */

  // Aula 14 // => State Lift
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  )
}

export default App;
