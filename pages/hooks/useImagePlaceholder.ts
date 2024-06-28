import { useEffect, useState } from "react";

export const useImagePlaceholder = (cardData: any) => {
  const [base64, setBase64] = useState<string>("");
  useEffect(() => {
    const fetchPlaceholder = async () => {
      if (!cardData || !cardData.imageUrl) return;
      try {
        const response = await fetch(
          `/api/getImagePlaceholder?src=${encodeURIComponent(
            cardData.imageUrl
          )}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch placeholder: ${response.status}`);
        }

        const data = await response.json();
        setBase64(data.base64);
      } catch (error) {
        console.error("Failed to fetch placeholder", error);
      }
    };

    fetchPlaceholder();
  }, [cardData?.imageUrl]);

  return { base64 };
};
