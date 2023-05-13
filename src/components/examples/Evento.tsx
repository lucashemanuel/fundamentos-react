import { useState } from "react";

export function Evento() {
  const [valor, setValor] = useState(0);

  function incrementar() {
    setValor(valor + 1);
    console.log("Valor: ", valor);
  }

  function decrementar() {
    setValor(valor - 1);
    console.log("Valor: ", valor);
  }

  return (
    <div
      className={`
      flex flex-col gap-4 
      text-white 
    `}
    >
      <span>
        <b>Valor: </b>
        {valor}
      </span>

      <button onClick={incrementar}>plus</button>
      <button onClick={decrementar}>minus</button>
    </div>
  );
}
