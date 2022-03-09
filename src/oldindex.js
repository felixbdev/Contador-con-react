import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = (props) => {
  const [contadorValue, updateContador] = useState(0);

  const Counter = ({ number }) => <h1>{number}</h1>;

  const handleClick = () => {
    updateContador(contadorValue + 1);
  };

  const reset = () => {
    updateContador(0);
  };

  const isEven = contadorValue % 2 === 0;

  return (
    <div>
      <p> El valor del contador es : </p>
      <Counter number={contadorValue} />
      <h2>Magia de React</h2>
      <p>{isEven ? "Es par" : "Es impar"}</p>
      <button onClick={handleClick}>Pulsame para incrementar</button>
      <button onClick={reset}>Pulsa para reiniciar</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
