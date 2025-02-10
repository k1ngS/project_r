import { useFetchCharacters } from "@/hooks/useFetchCharacters"
import { useCharacterStore } from "@/store/useCharacter.store";

export default function CharacterProfile() {
  const { data, isLoading, error } = useFetchCharacters();
  const character = useCharacterStore((state) => state.character);

  if(isLoading) return <p>Carregando...</p>
  if(error) return <p>Erro ao carregar personagens</p>
  if(!character) return <p>Nenhum personagem encontrado</p>

  return (
    <div>
      <h2>Nome: {character.name}</h2>
      <p>Nível: {character.level}</p>
      <p>Localização: {character.localisation}</p>
    </div>
  )
}