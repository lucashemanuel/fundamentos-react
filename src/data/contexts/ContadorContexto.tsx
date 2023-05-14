import { createContext, useState } from "react";

interface ContadorContextoProps {
  numero: number;
  incrementar: () => void;
  decrementar: () => void;
}

const ContadorContexto = createContext<ContadorContextoProps>({
  numero: 0,
  incrementar: () => {},
  decrementar: () => {},
});

export function ContadorProvedor(props: any) {
  const [numero, setNumero] = useState<number>(0);

  const incrementar = () => setNumero(numero + 1);
  const decrementar = () => setNumero(numero - 1);

  return (
    <ContadorContexto.Provider
      value={{
        numero,
        incrementar,
        decrementar,
      }}
    >
      {props.children}
    </ContadorContexto.Provider>
  );
}

export default ContadorContexto;
