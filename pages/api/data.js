import { generateKey } from "simpul";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    const payload = {
      id: generateKey(),
      name: "data_api",
      content: "This is a json payload fetched from the backend.",
    };

    res.status(200).json(payload);
  } else res.status(405).send("Method Not Allowed.");
}
