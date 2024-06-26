import { useRouter } from "next/router";

const CatProfile = () => {
  const router = useRouter();
  const { catId } = router.query;

  return <div>Cat Profile: {catId}</div>;
};

export default CatProfile;
