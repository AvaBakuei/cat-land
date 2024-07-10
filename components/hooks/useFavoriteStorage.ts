import { useLocalStorage } from "@mantine/hooks";
import { CardInterface } from "../Card/card.types";

export const useFavoriteStorage = () => {
  const [favorites, setFavorites] = useLocalStorage<CardInterface[]>({
    key: "favorites",
    defaultValue: [],
  });
  return {
    favorites,
    setFavorites,
  };
};
