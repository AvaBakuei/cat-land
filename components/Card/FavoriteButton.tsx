import { UnstyledButton, useMantineTheme } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import styles from "./Card.module.css";
import { useEffect, useState } from "react";
import { CardInterface, SingleCardProps } from "../common/types/card.types";
import { readLocalStorageValue } from "@mantine/hooks";

export const FavoriteButton: React.FC<SingleCardProps> = ({
  cardData,
  handleFavorite,
}) => {
  const [isFav, setIsFav] = useState(false);
  const theme = useMantineTheme();
  const favorites: CardInterface[] = readLocalStorageValue({ key: "favorites" });

  const handleClick = (cardData: CardInterface) => {
    handleFavorite(cardData);
    setIsFav(!isFav);
  };

  useEffect(() => {
    const isFavorite = favorites?.some((fav) => fav.id === cardData.id);
    setIsFav(isFavorite);
  }, [favorites]);

  return (
    <UnstyledButton
      className={styles.fav}
      onClick={() => handleClick(cardData)}
      style={{
        backgroundColor: isFav ? theme.colors.pink[0] : theme.colors.gray[0],
      }}
    >
      {isFav ? (
        <IconHeartFilled color={theme.colors.pink[6]} />
      ) : (
        <IconHeart stroke={2} color={theme.colors.gray[5]} />
      )}
    </UnstyledButton>
  );
};
