import { useCallback } from "react";
import { fetchData } from "../../../pages/api/fetchData";

export const useFetcher = () => {
    const data = useCallback(fetchData, [])
    return { data }
}