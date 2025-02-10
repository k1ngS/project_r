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
