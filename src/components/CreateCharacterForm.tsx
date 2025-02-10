"use client";
import { useCreateCharacter } from "@/hooks/useCreateCharacter";
import { useState } from "react";

export default function CreateCharacterForm() {
  const [name, setName] = useState("");
  const [markType, setMarkType] = useState("");
  const [attributes, setAttributes] = useState("{}");
  const [localisation, setLocalisation] = useState("");

  const { mutate, status, error } = useCreateCharacter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({ name, mark_type: markType, attributes: JSON.parse(attributes), localisation });

    setName("");
    setMarkType("");
    setAttributes("{}");
    setLocalisation("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2>Criar Novo Personagem</h2>

      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input className="text-black" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="markType">Marca do Fluxo:</label>
        <input className="text-black" id="markType" type="text" value={markType} onChange={(e) => setMarkType(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="attributes">Atributos (JSON):</label>
        <input className="text-black" id="attributes" type="text" value={attributes} onChange={(e) => setAttributes(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="localisation">Localização Inicial:</label>
        <input className="text-black" id="localisation" type="text" value={localisation} onChange={(e) => setLocalisation(e.target.value)} required />
      </div>

      <button type="submit" disabled={status === 'pending'}>
        {status === 'pending' ? "Criando..." : "Criar Personagem"}
      </button>

      {error && <p style={{ color: "red" }}>Erro: {error.message}</p>}
    </form>
  );
}
