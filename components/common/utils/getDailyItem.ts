import { CardInterface } from "@/components/Card/card.types";

export const getDailyItem = (items: CardInterface[]): CardInterface => {
  const today = new Date();
  const index = today.getDate() % items.length;
  return items[index];
};
