import { useState } from "react";

export default function Minimo() {
  const [valor, setValor] = useState("");
  return (
    <div className="flex flex-col gap-5 items-center">
      <span className="text-2xl font-black">Exemplo de Estado Minimo</span>
      <input
        type="text"
        value={valor}
        className="entrada"
        onChange={(e) => setValor(e.target.value)}
      />
    </div>
  );
}
