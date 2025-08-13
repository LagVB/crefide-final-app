import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import SignOut from '@/components/signout/SignOut'
import Link from 'next/link'


export default async function Home() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return <>
        <p>Hello {data.user.email}</p>
        <Link href="/products">Meus Produtos</Link>
        <SignOut />
    </>
}