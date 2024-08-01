import type { CardListProps } from "../common/types/card.types";
import { Grid } from "@mantine/core";

import { SingleCard } from "./SingleCard";
import styles from "./Card.module.css";
export const CardList: React.FC<CardListProps> = ({
  cardData,
  handleFavorite,
}) => {
  const cards = Array.isArray(cardData) ? cardData : [];
  return (
    <Grid grow className={styles.grid}>
      {cards?.map((card) => (
        <SingleCard
          key={card.name}
          cardData={card}
          handleFavorite={handleFavorite}
        />
      ))}
    </Grid>
  );
};
