export interface CardInterface {
  id: string;
  name: string;
  origin: string;
  imageUrl: string;
  description: string;
  href: string;
}

export type HandleFavorite = (cardData: CardInterface) => void;

export interface SingleCardProps {
  cardData: CardInterface;
  handleFavorite: HandleFavorite;
}

export interface CardListProps {
  cardData: CardInterface[];
  handleFavorite: HandleFavorite;
}
