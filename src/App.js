import HelloWorld from './components/HelloWorld'
import './App.css';

function App() {

  const name = 'Mattheus'

  const newName= name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>    
      <p>soma 2 + 2 = {2 + 2}</p>
      <p>Olá, {newName}</p>
      <p>soma 3 + 3 = {sum(3, 3)}</p>    
      <img src={url} alt="minha imagem"/>
      <HelloWorld />
    </div>
  );
}

export default App;
