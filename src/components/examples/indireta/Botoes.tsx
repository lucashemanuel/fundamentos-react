export interface BotoesProps {
  mudarValor: (novo: string) => void;
}

export default function Botoes(props: BotoesProps) {
  return (
    <div className="flex gap-5">
      <button className="botao" onClick={() => props.mudarValor("nome")}>
        nome
      </button>
      <button className="botao" onClick={() => props.mudarValor("jhon")}>
        jhon
      </button>
      <button className="botao" onClick={() => props.mudarValor("lucas")}>
        lucas
      </button>
      <button className="botao" onClick={() => props.mudarValor("teste")}>
        teste
      </button>
    </div>
  );
}
