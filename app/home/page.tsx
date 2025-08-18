import { redirect } from 'next/navigation'
import SignOut from '@/components/signout/SignOut'
import Link from 'next/link'
import { getServerUser } from '@/utils/getServerUser/user'


export default async function HomePage() {

    const { data, error } = await getServerUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return <>
        <Link href="/products">Meus Produtos</Link>
        <SignOut />
    </>
}