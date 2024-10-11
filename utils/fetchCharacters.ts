// fetchCharacters.ts
import { Character } from "../types/character";

export const fetchCharacters = async (status: string | null, gender: string | null): Promise<Character[]> => {
  let url = "https://rickandmortyapi.com/api/character";
  if (status || gender) {
    url += `?${status ? `status=${status}` : ""}${gender ? `&gender=${gender}` : ""}`;
  }
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};
