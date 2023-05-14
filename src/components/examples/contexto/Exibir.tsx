import ContadorContexto from "@/data/contexts/ContadorContexto";
import { useContext } from "react";

export default function Exibir() {
  const ctx: any = useContext(ContadorContexto);
  return (
    <div>
      <h1 className="text-5xl font-black">{ctx.numero}</h1>
    </div>
  );
}
