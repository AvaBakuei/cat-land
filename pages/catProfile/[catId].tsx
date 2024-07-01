import { CatProfileResponse } from "../api/catProfileResponse.types";
import { GetServerSideProps } from "next";
import { fetchData } from "../api/fetchData";
import { Loading } from "@/components/Loading";
import Image from "next/image";
import { useImagePlaceholder } from "../hooks/useImagePlaceholder";

interface CatProfileProps {
  catProfileData: CatProfileResponse | null;
  error?: string;
}

const CatProfile: React.FC<CatProfileProps> = ({ catProfileData, error }) => {
  const { base64 } = useImagePlaceholder();
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!catProfileData) {
    return <Loading />;
  }

  console.log("base64", base64);

  return (
    <div>
      <h1>{catProfileData.name}</h1>
      <p>{catProfileData.description}</p>
      {catProfileData.imageUrl && base64 && (
        <Image
          src={catProfileData.imageUrl}
          alt={catProfileData.name}
          width={500}
          height={500}
          loading="lazy"
          placeholder="blur"
          blurDataURL={base64}
        />
      )}
    </div>
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
