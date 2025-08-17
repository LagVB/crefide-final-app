import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { signup } from "./actions"
import Link from "next/link"

export default async function RegisterPage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (!error || data?.user) {
        redirect('/home')
    }


    return (
        <>
            <Link href="/login">Voltar</Link>
            <form>
                <label htmlFor="name">Nome:</label>
                <input id="name" name="name" type="text" required />
                <label htmlFor="phone">Telefone:</label>
                <input id="phone" name="phone" type="text" required />
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={signup}>Sign up</button>
            </form>
        </>
    )
}