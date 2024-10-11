// utils/fetchCharacters.ts
export const fetchCharacters = async (status: string | null, gender: string | null): Promise<any[]> => {
    let url = "https://rickandmortyapi.com/api/character";
    if (status || gender) {
      url += `?${status ? `status=${status}` : ""}${gender ? `&gender=${gender}` : ""}`;
    }
    
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await res.json();
    
    
    console.log(data); 
  
    return data.results || []; // Boş bir dizi döndürün
  };
  