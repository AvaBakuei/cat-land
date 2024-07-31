import { CardInterface } from "@/components/common/types/card.types";

export const getDailyItem = (items: CardInterface[]): CardInterface => {
  const today = new Date();
  const index = today.getDate() % items.length;
  return items[index];
};
