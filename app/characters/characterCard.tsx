import React from "react";

const CharacterCard: React.FC<{ character: any }> = ({ character }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={character.image} alt={character.name} className="w-full h-auto rounded" />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default CharacterCard;
