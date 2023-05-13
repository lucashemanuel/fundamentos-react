import { NextApiRequest, NextApiResponse } from "next";
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).send(`
    <html>
      <head>
        <style>          
        </style>
      </head>
      <body>
      <b>Hora certa:</b>
        ${new Date().toLocaleTimeString("pt-BR")}
      </body>
    </html>
  `);
}
