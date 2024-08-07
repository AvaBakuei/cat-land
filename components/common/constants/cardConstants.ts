import { CardInterface } from "../types/card.types";

export const PICKED_KEYS: (keyof CardInterface)[] = [
  "id",
  "name",
  "origin",
  "temperament",
  "description",
  "reference_image_id",
];

export const DEFAULT_VALUE = {
  key: "favorites",
  defaultValue: [],
};
