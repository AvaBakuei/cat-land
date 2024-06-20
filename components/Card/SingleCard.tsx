import { useState } from "react";
import type { CardInterface } from "./card.types";
import { Card, Image, Text, Paper, Anchor, Grid } from "@mantine/core";
import styles from "./Card.module.css";

export const SingleCard = ({ cardData }: { cardData: CardInterface }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  return (
    <Grid.Col span={3} className={styles.cardGrid}>
      <Card
        shadow="sm"
        radius="md"
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Section
          component="a"
          href="#"
          className={`${styles.imageCard} ${hover ? styles.hovered : ""}`}
        >
          <Image
            src={cardData.imageUrl}
            alt={cardData.name}
            className={styles.image}
          />
          <Paper shadow="xs" className={styles.name}>
            <Text size="sm" ta="center" fw={500} c="black">
              {cardData.name}
            </Text>
          </Paper>
        </Card.Section>
      </Card>
    </Grid.Col>
  );
};
