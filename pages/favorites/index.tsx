import { CardList } from "@/components/Card/CardList";
import { CardInterface } from "@/components/Card/card.types";
import { withDataCheck } from "@/components/hocs/withDataCheck";
import { removeFavoriteItem } from "@/components/utils/localStorageUtils";
import { useLocalStorage } from "@mantine/hooks";
const EnhancedCardList = withDataCheck(CardList);

const Favorites = () => {
  const [favorites, setFavorites] = useLocalStorage<CardInterface[]>({
    key: "favorites",
    defaultValue: [],
  });

  const removeFromFavoritesList = (cardData: CardInterface) => {
    removeFavoriteItem(cardData, favorites, setFavorites);
  };

  return (
    <EnhancedCardList
      cardData={favorites ?? []}
      handleFavorite={removeFromFavoritesList}
    />
  );
};

export default Favorites;
