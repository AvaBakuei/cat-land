import type { NextApiRequest, NextApiResponse } from "next";
import { fetchCatList } from "./fetchers";
import { CatResponse } from "./catResponse.types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CatResponse | { error: string }>
) {
  try {
    const catList = await fetchCatList();
    res.status(200).json(catList);
  } catch (error) {
    console.error("Error fetching cat list:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
