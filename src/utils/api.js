import { data } from "./entitries";

export const getCards = async () => {
  const flats = await JSON.parse(data);
  return flats;
};
