import { useState } from "react";
import type { CardInterface } from "./card.types";
import { Card, Text, Paper, Grid } from "@mantine/core";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import { useImagePlaceholder } from "@/components/hooks/useImagePlaceholder";

export const SingleCard = ({ cardData }: { cardData: CardInterface }) => {
  const [hover, setHover] = useState(false);
  const { base64 } = useImagePlaceholder();

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
        <Link
          href={`/catProfile/${cardData.id}`}
          className={`${styles.imageCard} ${hover ? styles.hovered : ""}`}
        >
          {base64 && (
            <Image
              src={cardData.imageUrl}
              alt={cardData.name}
              className={styles.image}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={base64}
            />
          )}

          <Paper shadow="xs" className={styles.name}>
            <Text size="sm" ta="center" fw={500} c="black">
              {cardData.name}
            </Text>
          </Paper>
        </Link>
      </Card>
    </Grid.Col>
  );
};
