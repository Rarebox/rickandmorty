// utils/fetchCharacters.ts
export const fetchCharacters = async (status: string | null, gender: string | null): Promise<any[]> => {
  let url = "https://rickandmortyapi.com/api/character";
  const params = new URLSearchParams();

  if (status) {
    params.append("status", status);
  }
  if (gender) {
    params.append("gender", gender);
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await res.json();
  console.log(data);

  return data.results || [];
};
