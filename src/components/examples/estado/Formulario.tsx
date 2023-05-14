import { useState } from "react";

interface Produto {
  nome: string;
  preco: number;
  desconto: number;
}

export default function Formulario() {
  const [produto, setProduto] = useState<Produto>({
    nome: "",
    preco: 0,
    desconto: 0,
  });
  return (
    <div className="flex flex-col gap-5 items-center">
      <span className="text-2xl font-black">Exemplo Formulario</span>
      <div>
        <span>Nome:</span>
        <input
          className="entrada"
          value={produto.nome}
          type="text"
          onChange={(e) => {
            setProduto({
              ...produto,
              nome: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <span>Preco:</span>
        <input
          type="number"
          min={0}
          step={0.1}
          className="entrada"
          value={produto.preco}
          onChange={(e) => {
            setProduto({
              ...produto,
              preco: +e.target.value,
            });
          }}
        />
      </div>
      <div>
        <span>Desconto (%):</span>
        <input
          type="number"
          min={0}
          max={60}
          step={5}
          className="entrada"
          value={produto.desconto}
          onChange={(e) => {
            setProduto({
              ...produto,
              desconto: +e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>{produto.nome}</span>
        <span>R${produto.preco}</span>
        <span>R${produto.preco * (produto.desconto / 100)}</span>
        <span>{JSON.stringify(produto)}</span>
      </div>
    </div>
  );
}
