import type { CardListProps } from "../common/types/card.types";
import { SimpleGrid } from "@mantine/core";

import { SingleCard } from "./SingleCard";
import styles from "./Card.module.css";
export const CardList: React.FC<CardListProps> = ({
  cardData,
  handleFavorite,
}) => {
  const cards = Array.isArray(cardData) ? cardData : [];
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, xl: 4 }}
      spacing={{ base: 5, xs: "xs" }}
      className={styles.cardGrid}
    >
      {cards?.map((card) => (
        <SingleCard
          key={card.name}
          cardData={card}
          handleFavorite={handleFavorite}
        />
      ))}
    </SimpleGrid>
  );
};
