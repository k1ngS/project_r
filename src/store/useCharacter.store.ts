import { create } from "zustand";

interface CharacterState {
  character: any | null;
  setCharacter: (character: any) => void;
  clearCharacter: () => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  character: null,
  setCharacter: (character) => set({ character }),
  clearCharacter: () => set({ character: null }),
}));