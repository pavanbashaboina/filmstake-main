import axios from "axios";


export const movieSlice = (set, get) =>( {
    moviesList: [],

    movieListAction: async () => {
        try {
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/movie-list`,{
                headers:{
                    "Content-Type":"application/json"
                }
            })

            set({ moviesList: data.movies})
            console.log(data.movies)

        } catch (error) {
            console.log(error)
        }
    }

})