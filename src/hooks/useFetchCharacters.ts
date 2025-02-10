import { useCharacterStore } from "@/store/useCharacter.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchCharacters = async() => {
  const response = await fetch("/api/characters");
  if(!response.ok) throw new Error("Erro ao buscar personagens");
  return response.json();
}

export function useFetchCharacters() {
  const setCharacter = useCharacterStore((state) => state.setCharacter);

  const query = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters
  })

  useEffect(() => {
    if(query.data && query.data.length > 0) {
      setCharacter(query.data[0]);
    }
  }, [query.data, setCharacter])

  return query;
}