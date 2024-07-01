import { useEffect, useState } from "react";

export const useImagePlaceholder = () => {
  const [base64, setBase64] = useState<string>("");
  const src =
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
