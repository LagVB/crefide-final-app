'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { db } from '@/db'
import { users } from '@/db/schema'

export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string,
    }

    if (data.password !== data.confirmPassword) {
        redirect('/register');
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) redirect('/error')

    const user = await db.insert(users).values({
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    })

    if (!user) redirect('/error');

    revalidatePath('/', 'layout')
    redirect('/home')
}