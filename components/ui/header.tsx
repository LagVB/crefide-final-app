import { getServerUser, getUserProfile } from "@/utils/getServerUser/user";
import Link from "next/link";

export default async function Header() {
    const { data } = await getServerUser()

    const user = await getUserProfile(data?.user?.auth.email!);

    return <header className="flex flex-col gap-40 items-center m-4">
        <h1>Crefide</h1>
        <nav className="flex flex-col gap-15">
            <Link href="/">Home</Link>
            {data?.user && <Link href="/products">Produtos</Link>}
            {!data?.user && <Link href="/login">Login</Link>}
            {!data?.user && <Link href="/register">Register</Link>}
        </nav>
        <p>Oi {user ? user.name?.split(" ")[0] : 'Guest'}</p>
    </header>
}