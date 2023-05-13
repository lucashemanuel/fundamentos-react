import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json([
    { nome: "Lucas", email: "teste@teste.com" },
    { nome: "Jhon", email: "teste@jhon.com" },
  ]);
}
