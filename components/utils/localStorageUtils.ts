import { CardInterface } from "../Card/card.types";

export const handlerFavorite = (
  cardData: CardInterface,
  favorites: CardInterface[],
  setFavorites: (favorites: CardInterface[]) => void
) => {
  const isAlreadyFavorite = favorites.some((fav) => fav.id === cardData.id);
  if (isAlreadyFavorite) {
    const newFavorites = favorites.filter((fav) => fav.id !== cardData.id);
    setFavorites(newFavorites);
  } else {
    const newFavorites = [...favorites, cardData];
    setFavorites(newFavorites);
  }
};
