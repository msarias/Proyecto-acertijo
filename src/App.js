import AdivinarNumero from './funcionamiento';
import './App.css';
import img from './imagen.png'

function App() {
  return (
    <div class="container">
      <div class="game-welcome">
        <h1>¡Bienvenido!</h1>
        <img src={img} alt="question-img"></img>
      </div>
      <div class="game-container">
        <h2>¿Podrá adivinar el número?</h2>
        <p>Intente adivinar un número aleatorio del 1 al 10.</p>
        <input type='number' id='numerousuario' min={1} max={10} placeholder='Ingrese un número'></input>
        <button onClick={AdivinarNumero}>Confirmar</button>
      </div>
    </div>
  );
}

export default App;
