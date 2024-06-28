import {  useCallback } from "react";
import { fetchData } from "../api/fetchData";

export const useFetcher = () => {
    const data = useCallback(fetchData, [])
    return {data}
}