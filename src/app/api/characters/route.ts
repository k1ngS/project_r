import { db } from "@/db";
import { charactersTable } from "@/db/schema";
import { getAuthenticatedUser } from "@/lib/kinde";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getAuthenticatedUser();

    // Buscar os personagens pelo user_id do Kinde
    const characters = await db
      .select()
      .from(charactersTable)
      .where(eq(charactersTable.user_id, user.id));

    return NextResponse.json(characters);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar personagens" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getAuthenticatedUser();
    const { name, mark_type, attributes, localisation } = await req.json();

    const existingCharacter = await db
      .select()
      .from(charactersTable)
      .where(eq(charactersTable.user_id, user.id));

    if(existingCharacter.length > 0) {
      return NextResponse.json({ error: "Usuário já possui um personagem vivo" }, { status: 400 });
    }

    const newCharacter = await db.insert(charactersTable).values({
      id: crypto.randomUUID(),
      user_id: user.id,
      name,
      mark_type,
      attributes,
      level: 1,
      experience: 0,
      localisation,
      status: "alive"
    }).returning();

    return NextResponse.json(newCharacter, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar personagem" }, { status: 500 });
  }
}