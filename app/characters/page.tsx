// app/characters/page.tsx
import CharacterCard from "./characterCard";
import Filters from "./filters";
import { Character } from "../../types/character";
import { fetchCharacters } from "../../utils/fetchCharacters";
import ClientSideComponent from "./ClientSideComponent";

// Sunucu tarafında karakterleri alır
export default async function CharactersPage({ searchParams }: { searchParams: { status?: string; gender?: string } }) {
  const status = searchParams.status || null;
  const gender = searchParams.gender || null;

  // Sunucu tarafında karakter verilerini alırız
  const characters: Character[] = await fetchCharacters(status, gender);

  return (
    <div className="p-4">
      <ClientSideComponent initialCharacters={characters} /> {/* İstemci bileşenini çağırıyoruz */}
    </div>
  );
}
