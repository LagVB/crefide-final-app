import { login } from './actions';
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';

export default async function LoginPage() {

    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (!error || data?.user) {
        redirect('/home')
    }


    return (
        <>
            <Link href="/register">Cadastrar</Link>
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={login}>Log in</button>
            </form>
        </>
    )
}