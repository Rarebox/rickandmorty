import React from "react";

const CharacterCard: React.FC<{ character: any }> = ({ character }) => {
  return (
    <div className="border-4 border-transparent rounded-lg p-3 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-green-400"> {/* Gölge arttırıldı */}
      <img src={character.image} alt={character.name} className="w-full h-auto rounded" />
      <h2 className="text-lg font-bold mt-2 text-blue-600">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default CharacterCard;
