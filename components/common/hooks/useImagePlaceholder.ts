import { useEffect, useState } from "react";

export const useImagePlaceholder = () => {
  const [base64, setBase64] = useState<string>("");
  const src = "http://localhost:3000/cat.jpg";
  useEffect(() => {
    const fetchPlaceholder = async () => {
      if (!src) return;
      try {
        const response = await fetch(
          `/api/getImagePlaceholder?src=${encodeURIComponent(src)}`
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
  }, []);

  return { base64 };
};
