import { CardList } from "@/components/Card/CardList";
import { CardInterface } from "@/components/Card/card.types";
import { withDataCheck } from "@/components/hocs/withDataCheck";
import { useFavoriteStorage } from "@/components/hooks/useFavoriteStorage";
import { removeFavoriteItem } from "@/components/utils/localStorageUtils";
const EnhancedCardList = withDataCheck(CardList);

const Favorites = () => {
  const { favorites, setFavorites } = useFavoriteStorage();

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
