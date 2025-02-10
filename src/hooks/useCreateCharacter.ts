import { useMutation, useQueryClient } from "@tanstack/react-query";

const createCharacter = async(characterData: any) => {
  const response = await fetch("/api/characters", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(characterData)
  })

  if(!response.ok) throw new Error("Erro ao criar personagem");

  return response.json();
}

export function useCreateCharacter() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["characters"] });
    }
  })
}