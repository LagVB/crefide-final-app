import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { signup } from "./actions"
import Link from "next/link"
import FormLabel from "@/components/ui/formLabel"
import FormInput from "@/components/ui/formInput"

export default async function RegisterPage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (!error || data?.user) {
        redirect('/home')
    }


    return (
        <div className='flex w-screen h-screen bg-[#3C5DBF] items-center justify-center'>
            <div className='flex bg-[#302F2F] gap-20 items-center justify-center rounded-lg h-[594px] w-[431px]'>
                <div className='flex flex-col gap-10 text-white'>
                    <div className='flex items-center justify-between gap-2 w-full'>
                        <h1 className="justify-self-center">Cadastro</h1>
                        <Link className='text-[11px] text-[#0296D6] justify-self-end' href="/login">Voltar</Link>
                    </div>
                    <form className="flex flex-col gap-5">
                        <div className='flex flex-col gap-2'>
                            <FormLabel htmlFor="name">NOME/RAZÃO SOCIAL</FormLabel>
                            <FormInput type="text" name="name" placeholder="Nome" required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FormLabel htmlFor="phone">TELEFONE</FormLabel>
                            <FormInput type="text" name="phone" placeholder="Telefone" required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FormLabel htmlFor="email">EMAIL</FormLabel>
                            <FormInput type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FormLabel htmlFor="password">SENHA</FormLabel>
                            <FormInput type="password" name="password" placeholder="Senha" required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FormLabel htmlFor="confirmPassword">CONFIRMAR SENHA</FormLabel>
                            <FormInput type="password" name="confirmPassword" placeholder="Confirmar Senha" required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button className='cursor-pointer bg-[#4A6BCE] rounded-md w-[360px] h-[35px] text-xs text-white' formAction={signup}>Cadastrar</button>
                            <div className='text-[11px] text-[#969696]'>
                                Já possui conta? <Link className='text-[#0296D6]' href="/login">Entrar</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}