// app/characters/page.tsx
"use client"; 

import { useEffect, useState } from "react";
import CharacterCard from "./characterCard";
import Filters from "./filters";
import { Character } from "../../types/character";
import { fetchCharacters } from "../../utils/fetchCharacters";

// Ana bileşen
export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);

  // İlk yüklemede veri çekmek için SSR'yi kullanın
  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters(status, gender);
      setCharacters(data);
    };
    getCharacters();
  }, [status, gender]);

  return (
    <div className="p-4">
      <Filters setStatus={setStatus} setGender={setGender} /> {/* Fonksiyonları burada geçiriyoruz */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
