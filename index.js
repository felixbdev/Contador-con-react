import { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  // return (
  //   <div>
  //     <button onClick={() => setLeft(left + 1)}>Left</button>
  //     <h3>{left}</h3>
  //     <hr/>
  //     <button onClick={() => setRight(right + 1)}>Right</button>
  //     <h3>{right}</h3>
  //   </div>
  // );

  const [counter, setCounters] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    mensaje: "Mensaje en el estado"
  });

  const handleClickLeft = () => {
    const newCountersState = {
      ...counter,
      left: counter.left + 1,
      clicks: counter.clicks + 1
    };
    setCounters(newCountersState);
  };

  const handleClickRight = () => {
    setCounters({
      ...counter,
      right: counter.right + 1,
      clicks: counter.clicks + 1
    });
  };

  return (
    <div>
      <p>{counter.left}</p>
      <button onClick={handleClickLeft}>Left</button>
      <hr />
      <p>{counter.right}</p>
      <button onClick={handleClickRight}>Right</button>
      <p>Click Totales: {counter.clicks}</p>
      <span>{counter.mensaje}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
