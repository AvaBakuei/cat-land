import { CardInterface } from "../types/card.types";
import { localStorageInterFace } from "../types/localStorage.types";

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

export const removeFavoriteItem = (
  cardData: CardInterface,
  favorites: CardInterface[],
  setFavorites: (favorites: CardInterface[]) => void
) => {
  const newFavorites = favorites.filter((fav) => fav.id !== cardData.id);
  setFavorites(newFavorites);
};

// Set Dily Cat
export const setWithExpiry = (key: string, value: object): void => {
  const now = new Date();
  const ttl = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const item: localStorageInterFace = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

// Get Dily Cat
export const getWithExpiry = (key: string) => {
  const itemValue = localStorage.getItem(key);
  if (!itemValue) {
    return null;
  }

  const item = JSON.parse(itemValue);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
};

// Utility Function for Image Caching
export const setImageCache = (key: string, data: CardInterface[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Failed to set localStorage key "${key}":`, error);
  }
};

export const getImageCache = (key: string): CardInterface[] => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Failed to parse localStorage key "${key}":`, error);
    return [];
  }
};
