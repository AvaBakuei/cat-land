import Head from "next/head";
import { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useQuery } from "@tanstack/react-query";
import { CardList } from "@/components/Card/CardList";
import { Loading } from "@/components/Loading";
import { useFetcher } from "../components/hooks/useFetcher";
import { withDataCheck } from "@/components/hocs/withDataCheck";
import { CardInterface } from "@/components/Card/card.types";
import { useLocalStorage } from "@mantine/hooks";

const inter = Inter({ subsets: ["latin"] });

const EnhancedCardList = withDataCheck(CardList);

const Home = () => {
  const [favorites, setFavorites] = useLocalStorage<CardInterface[]>({
    key: "fav",
    defaultValue: [],
  });
  const { data: fetchCatList } = useFetcher();
  const { data: fetchCatImage } = useFetcher();
  const { isLoading, error, data } = useQuery<CardInterface[]>({
    queryKey: ["catList"],
    queryFn: async () => {
      const catList = await fetchCatList("breeds?limit=4&page=0");
      const catsWithImages = await Promise.all(
        catList.map(async (cat: any): Promise<CardInterface> => {
          const image = await fetchCatImage("images", cat.reference_image_id);
          return { ...cat, imageUrl: image.url };
        })
      );
      return catsWithImages;
    },
  });

  const handleFavorite = (cardData: CardInterface) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === cardData.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((fav) => fav.id !== cardData.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, cardData]);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Head>
        <title>Cat Land</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <EnhancedCardList
          cardData={data ?? []}
          favorites={favorites}
          handleFavorite={handleFavorite}
        />
      </main>
    </>
  );
};

export default Home;
