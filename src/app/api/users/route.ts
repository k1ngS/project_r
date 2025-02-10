import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

/**
 * ✅ [GET] - Retorna o usuário autenticado no Kinde
 */
export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      return NextResponse.json({ error: "Usuário não autenticado" }, { status: 401 });
    }

    return NextResponse.json({
      id: user.id,
      name: user.given_name || "Usuário Sem Nome",
      email: user.email,
      avatar: user.picture,
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar usuário" }, { status: 500 });
  }
}
