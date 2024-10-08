import { useState } from "react";
import type { SingleCardProps } from "../common/types/card.types";
import { Card, Text, Paper, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import { useImagePlaceholder } from "@/components/common/hooks/useImagePlaceholder";
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
            className={`${styles.image} ${hover ? styles.hovered : ""}`}
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL={base64}
          />
        )}
      </div>
      <Link href={`/catProfile/${cardData.id}`}>
        <Paper shadow="xs" className={styles.name}>
          <Text size="sm" ta="center" fw={500} c={theme.colors.gray[7]}>
            {cardData.name}
          </Text>
        </Paper>
      </Link>
    </Card>
  );
};
