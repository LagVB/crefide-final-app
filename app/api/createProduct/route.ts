import { db } from "@/db"
import { products } from "@/db/schema"
import { createClient } from "@/utils/supabase/server"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {

    try {
        const { name, description, price } = await req.json();
        const supabase = await createClient()
        const { data, error } = await supabase.auth.getUser()
        if (error) {
            console.error(error)
        }
        const userId = data.user?.id
        console.log(name, description, price);
        const product = await db.insert(products).values({ name, description, price, user_id: userId });
        console.log(product);
        return NextResponse.json({ message: "Produto criado com sucesso" })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Erro ao criar produto" }, { status: 500 })
    }
}
