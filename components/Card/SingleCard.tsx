import { useEffect, useState } from "react";
import type { CardInterface, SingleCardProps } from "./card.types";
import {
  Card,
  Text,
  Paper,
  Grid,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import { useImagePlaceholder } from "@/components/hooks/useImagePlaceholder";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

export const SingleCard: React.FC<SingleCardProps> = ({
  cardData,
  favorites,
  handleFavorite,
}) => {
  const theme = useMantineTheme();
  const [hover, setHover] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const { base64 } = useImagePlaceholder();

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const handleClick = (cardData: CardInterface) => {
    handleFavorite(cardData);
    setIsFav(!isFav);
  };

  useEffect(() => {
    const isFavorite = favorites.some((fav) => fav.id === cardData.id);
    setIsFav(isFavorite);
  }, [favorites]);

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
          <UnstyledButton
            className={styles.fav}
            onClick={() => handleClick(cardData)}
            style={{
              backgroundColor: isFav
                ? theme.colors.pink[0]
                : theme.colors.gray[0],
            }}
          >
            {isFav ? (
              <IconHeartFilled color={theme.colors.pink[6]} />
            ) : (
              <IconHeart stroke={2} color={theme.colors.gray[5]} />
            )}
          </UnstyledButton>
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
