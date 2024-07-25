import { NextApiRequest, NextApiResponse } from "next";
import { getPlaiceholder } from "plaiceholder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { src } = req.query;

  if (!src || typeof src !== "string") {
    return res.status(400).json({ error: "Invalid src parameter" });
  }

  try {
    const response = await fetch(src);

    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    const { base64 } = await getPlaiceholder(buffer);

    res.status(200).json({ base64 });
  } catch (error) {
    console.error("Failed to process the image", error);
    res.status(500).json({ error: "Failed to process the image" });
  }
}
