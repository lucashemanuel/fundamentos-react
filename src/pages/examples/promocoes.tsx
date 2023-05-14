import Pagina from "@/components/template/Pagina";

export async function getStaticProps() {
  const dados = await fetch("http://localhost:3000/api/promocoes");
  const promocoes = await dados.json();
  const data = new Date().toLocaleTimeString("pt-br");
  return {
    props: { teste: 123, data, promocoes },
    revalidate: 10, //10 segundos
  };
}

export default function PaginaPromocoes(props: any) {
  return (
    <Pagina>
      <div>
        <h1>{props.data}</h1>
        <ul>
          {props.promocoes.map((produto: any) => {
            return (
              <li key={produto.id}>
                {produto.nome} | {produto.preco}
              </li>
            );
          })}
        </ul>
      </div>
    </Pagina>
  );
}
