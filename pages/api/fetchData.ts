const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://api.thecatapi.com/v1";
export const fetchData = async (endpoint: string, id?: string) => {
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
  return response.json();
};
