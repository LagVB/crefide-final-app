import { createClient } from '@/utils/supabase/server'
import { db } from "@/db";
import { SelectUser, users } from "@/db/schema";
import { User } from "@supabase/supabase-js";
import { eq } from "drizzle-orm";


export interface EnhancedUser {
    auth: User,
    profile: SelectUser | null
}

export async function getServerUser(): Promise<{
    data: { user: EnhancedUser | null }
    error: any
}> {
    try {
        const supabase = await createClient()
        const { data, error } = await supabase.auth.getUser()

        if (!data?.user || error) {
            return {
                data: { user: null },
                error: error
            }
        }

        const userProfile = await db
            .select()
            .from(users)
            .where(eq(users.email, data.user.email!))
            .limit(1)

        const enhancedUser: EnhancedUser = {
            auth: data.user,
            profile: userProfile[0] || null
        }

        return {
            data: { user: enhancedUser },
            error: null
        }

    } catch (error) {
        return {
            data: { user: null },
            error: error
        }
    }
}

export async function getUserProfile(email: string): Promise<SelectUser | null> {
    if (!email) return null

    try {
        const userProfile = await db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1)

        return userProfile[0] || null
    } catch (error) {
        console.error('Error fetching user profile:', error)
        return null
    }
}