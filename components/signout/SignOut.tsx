'use client'

import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation';



export default function SignOut() {
    const supabase = createClient()
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        redirect('/login');
    }
    return <button onClick={signOut}>Sign Out</button>
}







