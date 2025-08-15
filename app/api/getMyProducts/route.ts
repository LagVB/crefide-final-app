import { db } from "@/db"
import { products } from "@/db/schema"
import { createClient } from "@/utils/supabase/server"
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"



export async function GET(req: NextRequest) {
    try {
        const supabase = await createClient()
        const { data, error } = await supabase.auth.getUser()
        if (error) {
            console.error(error)
        }
        const userId = data.user?.id
        if (!userId) return NextResponse.json({ message: "Usuário não logado!" })
        const myProducts = await db.select().from(products).where(eq(products.userId, userId))
        return NextResponse.json(myProducts);
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Erro ao buscar produtos" }, { status: 500 })
    }
}