// app/characters/ClientSideComponent.tsx
"use client"; 

import { useState } from "react";
import CharacterCard from "./characterCard";
import Filters from "./filters";
import { Character } from "../../types/character";
import { fetchCharacters } from "../../utils/fetchCharacters";

export default function ClientSideComponent({ initialCharacters }: { initialCharacters: Character[] }) {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [status, setStatus] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);

  // Filtreleme işlevi (client tarafında)
  const handleFilterChange = async () => {
    const filteredCharacters = await fetchCharacters(status, gender);
    setCharacters(filteredCharacters);
  };

  return (
    <div className="p-4">
      <Filters setStatus={setStatus} setGender={setGender} onFilterChange={handleFilterChange} /> {/* Filtreleme fonksiyonları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>
    </div>
  );
}
