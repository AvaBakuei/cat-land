import type { NextApiRequest, NextApiResponse } from "next";
import { fetchCatList, fetchCatImage } from "./fetchers";
interface Cat {
    id: string;
    name: string;
    origin: string;
    image_id: string;
    description: string;
}

interface CatImage {
    id: string;
    url: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat[] | { error: string }>
) {
  try {
    const catList = await fetchCatList();
    const catWithImages = await Promise.all(
      catList.map(async (cat: any) => {
          const image: CatImage = await fetchCatImage(cat.reference_image_id);
        return { ...cat, imageUrl: image.url };
      })
    );
    res.status(200).json(catWithImages);
  } catch (error) {
    console.error("Error fetching cat list:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
