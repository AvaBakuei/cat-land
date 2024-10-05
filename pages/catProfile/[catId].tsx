import { GetServerSideProps } from "next";
import { fetchData } from "../api/fetchData";
import { Loading } from "@/components/Loading";
import Image from "next/image";
import { useImagePlaceholder } from "../../components/common/hooks/useImagePlaceholder";
import {
  Grid,
  Paper,
  Title,
  Text,
  useMantineTheme,
  Anchor,
} from "@mantine/core";
import styles from "./Cat.module.css";
import { CatProfileProps } from "../../components/common/types/catProfile.types";
import CatProfileDetail from "./CatProfileDetail";

const CatProfile: React.FC<CatProfileProps> = ({ catProfileData, error }) => {
  const theme = useMantineTheme();
  const { base64 } = useImagePlaceholder();
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!catProfileData) {
    return <Loading />;
  }

  return (
    <Paper className={styles.catProfile} shadow="lg">
      <Grid>
        <Grid.Col span={{ sm: 12, md: 12, lg: 4 }}>
          {catProfileData.imageUrl && base64 && (
            <Image
              src={catProfileData.imageUrl}
              alt={catProfileData.name}
              width={500}
              height={500}
              loading="lazy"
              placeholder="blur"
              blurDataURL={base64}
              className={styles.catImage}
            />
          )}
        </Grid.Col>
        <Grid.Col
          span={{ sm: 12, md: 12, lg: 8 }}
          className={styles.catInformation}
        >
          <Title order={1} style={{ color: theme.colors.dark[5] }}>
            {catProfileData.name}
          </Title>

          <CatProfileDetail
            className={styles.data}
            title="Origin"
            value={catProfileData.origin}
          />

          <CatProfileDetail
            className={styles.data}
            title="Temperament"
            value={catProfileData.temperament}
          />

          <CatProfileDetail
            className={styles.data}
            title="Description"
            value={catProfileData.description}
          />
          <Anchor
            href={catProfileData.wikipedia_url}
            target="_blank"
            className={styles.wikiLink}
          >
            Read More
          </Anchor>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { catId } = context.params as { catId: string };

  try {
    let catProfileData = await fetchData("breeds", catId);
    const catImageId = catProfileData.reference_image_id;
    const catImage = await fetchData("images", catImageId);
    catProfileData = { ...catProfileData, imageUrl: catImage.url };
    return {
      props: {
        catProfileData,
      },
    };
  } catch (error: any) {
    return {
      props: {
        catProfileData: null,
        error: error.message,
      },
    };
  }
};

export default CatProfile;
