import Lottie from "lottie-react";
import loadingAnimate from "../public/loadingAnimate.json";
import { Center } from "@mantine/core";

export const Loading = () => {
  return (
    <Center>
      <div
        className="loading"
        style={{ width: "450px", padding: "4px", marginTop: "100px" }}
      >
        <Lottie animationData={loadingAnimate} loop={true} />
      </div>
    </Center>
  );
};
