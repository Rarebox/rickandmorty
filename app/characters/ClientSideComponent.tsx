import React, { useState } from "react";
import Filters from "./filters";
import CharacterCard from "./characterCard";
import { Character } from "../../types/character";

interface ClientSideComponentProps {
  initialCharacters: Character[];
}

const ClientSideComponent: React.FC<ClientSideComponentProps> = ({
  initialCharacters,
}) => {
  const [characters, setCharacters] = useState(initialCharacters);
  const [status, setStatus] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);

  const onFilterChange = async () => {
    // Filtreler değiştiğinde tetiklenecek işlemler buraya yazılabilir
    console.log("Filters changed");
  };

  return (
    <div className="p-4">
      <Filters 
        setStatus={setStatus} 
        setGender={setGender} 
      /> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default ClientSideComponent;
