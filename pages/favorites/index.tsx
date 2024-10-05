import { CardList } from "@/components/Card/CardList";
import { CardInterface } from "@/components/common/types/card.types";
import { DEFAULT_VALUE } from "@/components/common/constants/cardConstants";
import { withDataCheck } from "@/components/common/hocs/withDataCheck";
import { removeFavoriteItem } from "@/components/common/utils/localStorageUtils";
import { useLocalStorage } from "@mantine/hooks";
import styles from "@/styles/Home.module.css";

const EnhancedCardList = withDataCheck(CardList);

const Favorites = () => {
  const [favorites, setFavorites] =
    useLocalStorage<CardInterface[]>(DEFAULT_VALUE);

  const removeFromFavoritesList = (cardData: CardInterface) => {
    removeFavoriteItem(cardData, favorites, setFavorites);
  };

  return (
    <main className={`${styles.main}`}>
      <EnhancedCardList
        cardData={favorites ?? []}
        handleFavorite={removeFromFavoritesList}
      />
    </main>
  );
};

export default Favorites;
