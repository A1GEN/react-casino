import {supabase} from "./supabaseClient"

// fetch vs axios  supabase
export const gamesService = {
    getAllGames: async () => {
        const { data, error } = await supabase
            .from('games')
            .select('*')
        
        if (error) {
            throw new Error(error.message)
        }

        return data
    }
}