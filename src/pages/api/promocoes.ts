import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const demora = 6000;
  const inicio = Date.now();
  while (Date.now() - inicio < demora) {}

  response.status(200).json([
    { id: 1, nome: "caneta", preco: 7.59 },
    { id: 2, nome: "lápis", preco: 3.81 },
    { id: 3, nome: "caderno", preco: 18.3 },
  ]);
}
