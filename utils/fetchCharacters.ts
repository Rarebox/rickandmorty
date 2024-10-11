export const fetchAllCharacters = async (status: string | null, gender: string | null): Promise<any[]> => {
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

  let allCharacters: any[] = [];
  let nextPage = url;

  while (nextPage) {
    const res = await fetch(nextPage);

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    allCharacters = [...allCharacters, ...data.results];
    nextPage = data.info.next; // Sonraki sayfayı al
  }

  return allCharacters;
};
