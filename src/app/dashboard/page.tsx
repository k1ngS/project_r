"use client"
import CharacterProfile from "@/components/CharacterProfile";
import CreateCharacterForm from "@/components/CreateCharacterForm";
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Dashboard() {
  const { user } = useKindeBrowserClient();
  return(
    <>
      <header className="flex gap-4 items-center justify-between bg-stone-900 p-4 mb-4">
        <div className="flex gap-4 items-center">
          <img src={user?.picture} alt="Avatar" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col">
            <span>{user?.given_name} {user?.family_name}</span>
            <span className="text-xs text-stone-500">{user?.email}</span>
          </div>
        </div>
        <LogoutLink>Sair</LogoutLink>
      </header>
      <main>
        <h1>Dashboard</h1>
        <CreateCharacterForm />
        <CharacterProfile />
      </main>
    </>
  )
}