import { redirect } from 'next/navigation'
import SignOut from '@/components/signout/SignOut'
import Link from 'next/link'
import { getEnhancedUser } from '@/utils/getUser/user'


export default async function Home() {

    const { data, error } = await getEnhancedUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return <>
        <p>Hello {data.user.profile?.name}</p>
        <Link href="/products">Meus Produtos</Link>
        <SignOut />
    </>
}