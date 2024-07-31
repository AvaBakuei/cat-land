import type { CardListProps } from "../common/types/card.types";
import { Grid } from "@mantine/core";

import { SingleCard } from "./SingleCard";
import styles from "./Card.module.css";
export const CardList: React.FC<CardListProps> = ({
  cardData,
  handleFavorite,
}) => {
  return (
    <Grid
      gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}
      className={styles.grid}
    >
      {cardData?.map((card) => (
        <SingleCard
          key={card.name}
          cardData={card}
          handleFavorite={handleFavorite}
        />
      ))}
    </Grid>
  );
};
