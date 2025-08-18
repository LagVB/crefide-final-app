import { login } from './actions';
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';
import Image from 'next/image';
import logoLogin from '@/img/logo-login.svg';

export default async function LoginPage() {

    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (!error || data?.user) {
        redirect('/home')
    }


    return (
        <div className='flex w-screen h-screen bg-[#3C5DBF] items-center justify-center'>
            <div className='flex bg-[#302F2F] gap-20 items-center justify-center rounded-lg h-[435px] w-[706px]'>
                <div className='flex flex-col items-center justify-center w-full h-full text-white gap-10'>
                    <h1 className='ml-14'>Boas Vindas!</h1>
                    <form className='flex flex-col w-full gap-8 pl-9'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] text-[#969696]' htmlFor="email">E-MAIL <span className='text-red-500'>*</span></label>
                            <input className='bg-[#1B1919] rounded-md p-2 w-[360px] h-[35px] focus:outline-none' id="email" name="email" type="email" required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] text-[#969696]' htmlFor="password">SENHA <span className='text-red-500'>*</span></label>
                            <input className='bg-[#1B1919] rounded-md p-2 w-[360px] h-[35px] focus:outline-none' id="password" name="password" type="password" required />
                            <Link href="/forgot-password">Esqueceu sua senha?</Link>
                        </div>

                        <button className='cursor-pointer bg-[#4A6BCE] rounded-md w-[360px] h-[35px] text-xs text-white' formAction={login}>Entrar</button>
                    </form>
                    <div className='text-[10px] text-[#969696]'>
                        Não possui conta? <Link href="/register">Cadastrar</Link>
                    </div>
                </div>
                <div className='h-full flex items-center justify-center w-full pr-15'>
                    <Image src={logoLogin} alt="logo" width={173} height={118} />
                </div>
            </div>
        </div>
    )
}