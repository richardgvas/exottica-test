import { API_LANDINGS } from "../const/api";

export const getLandings = async () => {
  const response = await fetch(API_LANDINGS);
  return await response.json();
};
