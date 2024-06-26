import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { CardList } from "@/components/Card/CardList";
import { Loading } from "@/components/Loading";
import { useFetcher } from "./hooks/useFetcher";
import { withDataCheck } from "@/components/hocs/withDataCheck";
import { CardInterface } from "@/components/Card/card.types";

const inter = Inter({ subsets: ["latin"] });

const EnhancedCardList = withDataCheck(CardList);

const Home = () => {
  const { fetchData: fetchCatList } = useFetcher();
  const { fetchData: fetchCatImage } = useFetcher();
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

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <EnhancedCardList cardData={data ?? []} />
      </main>
    </>
  );
};

export default Home;
