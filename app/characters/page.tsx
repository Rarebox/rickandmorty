"use client";

import { useEffect, useState } from "react";
import CharacterCard from "./characterCard";
import Filters from "./filters";
import { Character } from "../../types/character";
import { fetchAllCharacters } from "../../utils/fetchCharacters";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        const data = await fetchAllCharacters(status, gender);
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [status, gender]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Rick and Morty Characters</h1>
        <Filters setStatus={setStatus} setGender={setGender} />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}
