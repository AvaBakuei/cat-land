import { useState, useCallback } from "react";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://api.thecatapi.com/v1";

export const useFetcher = () => {
    const [data, setData] = useState<any>(null); // Adjust type as per your API response structure
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (endpoint: string, id?: string) => {
        setLoading(true);
        try {
            const fullUrl = id ? `${endpoint}/${id}` : endpoint;
            const response = await fetch(`${baseUrl}/${fullUrl}`, {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": apiKey ?? "",
                },
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setData(result); // Assuming your API response is stored directly in state
            setLoading(false);
        } catch (error) {
            setError(error as Error);
            setLoading(false);
        }
    }, []);

    return { data, error, loading, fetchData };
};
