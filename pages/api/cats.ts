import type { NextApiRequest, NextApiResponse } from "next";
import { fetchCatList } from "./fetchers";

type Cat = {
  id: string;
  name: string;
  origin: string;
  image_id: string;
  discription: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat[] | { error: string }>
) {
  try {
    const catList = await fetchCatList();
    res.status(200).json(catList);
  } catch (error) {
    console.error("Error fetching cat list:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
