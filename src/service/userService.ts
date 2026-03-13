import {supabase} from "./supabaseClient"

// fetch vs axios  supabase
export const userService = {
    getAllUsers: async () => {
        const { data, error } = await supabase
            .from('users')
            .select('*')
        
        if (error) {
            throw new Error(error.message)
        }

        return data
    }
}