import { CatProfileResponse } from "../../components/types/catProfileResponse.types";

export interface CatProfileProps {
  catProfileData: CatProfileResponse | null;
  error?: string;
}
export interface CatProfileDetailProps {
  title: string;
  value: string;
  className?: string;
}
