import { CardList } from "@/components/Card/CardList";
import { CardInterface } from "@/components/Card/card.types";
import { withDataCheck } from "@/components/common/hocs/withDataCheck";
import { useFavoriteStorage } from "@/components/common/hooks/useFavoriteStorage";
import { removeFavoriteItem } from "@/components/common/utils/localStorageUtils";
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
