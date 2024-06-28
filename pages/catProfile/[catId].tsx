import { CatProfileResponse } from "../api/catProfileResponse.types";
import { GetServerSideProps } from "next";
import { fetchData } from "../api/fetchData";
import { Loading } from "@/components/Loading";
import Image from "next/image";

interface CatProfileProps {
    catProfileData: CatProfileResponse | null;
    error?: string;
}


const CatProfile: React.FC<CatProfileProps> = ({ catProfileData, error }) => {
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!catProfileData) {
        return <Loading />;
    }

    return (
        <div>
            <h1>{catProfileData.name}</h1>
            <p>{catProfileData.description}</p>
            {catProfileData.image && (
                <Image
                    src={catProfileData.image}
                    alt={catProfileData.name}
                    width={500}
                    height={500}
                    loading="lazy"
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
        catProfileData = { ...catProfileData, image: catImage.url };
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
