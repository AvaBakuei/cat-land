import { NextApiRequest, NextApiResponse } from "next";
import { getPlaiceholder } from "plaiceholder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { src } = req.query;
  if (!src || typeof src !== "string") {
    res.status(400).json({ error: "Invalid src parameter" });
    return;
  }

  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer);
    res.status(200).json({ base64 });
  } catch (error) {
    res.status(500).json({ error: "Failed to process the image" });
  }
}
