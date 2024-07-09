import { useState } from "react";
import type { SingleCardProps } from "./card.types";
import { Card, Text, Paper, Grid, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import { useImagePlaceholder } from "@/components/hooks/useImagePlaceholder";
import { FavoriteButton } from "./FavoriteButton";

export const SingleCard: React.FC<SingleCardProps> = ({
  cardData,
  handleFavorite,
}) => {
  const theme = useMantineTheme();
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
        <div className={styles.imageCard}>
          <FavoriteButton cardData={cardData} handleFavorite={handleFavorite} />
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
        </div>

        <Paper shadow="xs" className={styles.name}>
          <Link
            href={`/catProfile/${cardData.id}`}
            className={`${hover ? styles.hovered : ""}`}
            style={{ textDecoration: "none" }}
          >
            <Text size="sm" ta="center" fw={500} c={theme.colors.dark[4]}>
              {cardData.name}
            </Text>
          </Link>
        </Paper>
      </Card>
    </Grid.Col>
  );
};
