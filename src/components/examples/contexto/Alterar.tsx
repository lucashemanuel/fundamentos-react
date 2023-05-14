import ContadorContexto from "@/data/contexts/ContadorContexto";
import { useContext } from "react";

export default function Alterar() {
  //const { incrementar, decrementar } = useContext(ContadorContexto);
  const ctx: any = useContext(ContadorContexto);

  return (
    <div className="flex gap-5">
      <button
        //onClick={decrementar}
        onClick={() => ctx.decrementar()}
        className="botao text-2xl font-bold"
      >
        -1
      </button>
      <button
        //onClick={incrementar}
        onClick={() => ctx.incrementar()}
        className="botao text-2xl font-bold"
      >
        +1
      </button>
    </div>
  );
}
