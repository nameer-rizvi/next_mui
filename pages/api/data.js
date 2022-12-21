import { generateKey } from "simpul";

// Next.js API Routes Documentation
//   https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      id: generateKey(),
      name: "data_api",
      content: "This is a json payload fetched from the backend.",
    });
  } else res.status(405).send("Method Not Allowed.");
}
