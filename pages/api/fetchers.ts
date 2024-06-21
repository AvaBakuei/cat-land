import { CatImageResponse } from "./catImageResponse.types";
import { CatResponse } from "./catResponse.types";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchCatList = async (): Promise<CatResponse> => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/breeds?limit=4&page=0",
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey ?? "",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const fetchCatImage = async (id: string): Promise<CatImageResponse> => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey ?? "",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
