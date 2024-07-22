import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useQuery } from "@tanstack/react-query";
import { CardList } from "@/components/Card/CardList";
import { Loading } from "@/components/Loading";
import { useFetcher } from "../components/common/hooks/useFetcher";
import { withDataCheck } from "@/components/common/hocs/withDataCheck";
import { CardInterface } from "@/components/Card/card.types";
import { handlerFavorite } from "@/components/common/utils/localStorageUtils";
import { pickProperties } from "@/components/common/utils/propertyUtils";
import {
  DEFAULT_VALUE,
  PICKED_KEYS,
} from "@/components/common/constants/cardConstants";
import { useLocalStorage } from "@mantine/hooks";
import {
  RandomCatModal,
  RandomCatModalRef,
} from "@/components/Modal/RandomCatModal";

const inter = Inter({ subsets: ["latin"] });

const EnhancedCardList = withDataCheck(CardList);

const Home = () => {
  const [favorites, setFavorites] =
    useLocalStorage<CardInterface[]>(DEFAULT_VALUE);
  const modalRef = useRef<RandomCatModalRef>(null);
  const[isVerify, setIsVerify] = useState<boolean>(false)

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  }, []);

  const handleVerifyCode = (value: string) => {
    if (value === "kitten") {
      setIsVerify(true);
    }
  };

  const { data: fetchCatList } = useFetcher();
  const { data: fetchCatImage } = useFetcher();
  const { isLoading, error, data } = useQuery<CardInterface[]>({
    queryKey: ["catList"],
    queryFn: async () => {
      const catList: CardInterface[] = await fetchCatList(
        "breeds?limit=4&page=0"
      );
      const newCatList = catList.map((cat) => pickProperties(cat, PICKED_KEYS));
      const catsWithImages = await Promise.all(
        newCatList.map((cat: CardInterface): Promise<CardInterface> => {
          return fetchCatImage("images", cat.reference_image_id).then(
            (image) => ({
              ...cat,
              imageUrl: image.url,
            })
          );
        })
      );
      return catsWithImages;
    },
  });
  console.log("datatatatataat", data);

  const handleFavoritesList = (cardData: CardInterface) => {
    handlerFavorite(cardData, favorites, setFavorites);
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
        <RandomCatModal
          ref={modalRef}
          title="Enter verification code"
          codeLength={6}
          buttonTitle="Verify Code"
          handleVerifyCode={handleVerifyCode}
          isVerify={isVerify}
        />
        <EnhancedCardList
          cardData={data ?? []}
          handleFavorite={handleFavoritesList}
        />
      </main>
    </>
  );
};

export default Home;
