import { CardList } from "@/components/Card/CardList";
import { CardInterface } from "@/components/Card/card.types";
import { withDataCheck } from "@/components/hocs/withDataCheck";
import { readLocalStorageValue } from "@mantine/hooks";
import { useState } from "react";
const EnhancedCardList = withDataCheck(CardList)

const Favorites = () => {
    const favoritesList: CardInterface[] = readLocalStorageValue({ key: "favorites" });
    console.log("fav", favoritesList);

    const handleFavorite = (data: CardInterface) => {
        console.log("datatata", data);

    }

    return (
        <EnhancedCardList cardData={favoritesList ?? []} handleFavorite={handleFavorite} />
    )
}

export default Favorites;