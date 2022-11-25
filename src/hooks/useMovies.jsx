import { useDispatch, useSelector } from "react-redux";
import movieDB from "../api/movieDB";
import { onSetmoviesInTheaters } from "../store/movies-Slice/moviesSlice";




export const useMovies = () => {

    const dispatch = useDispatch();
    const { moviesInTheaters, loading } = useSelector( state => state.movies )


    const startGetMovieDB = async() => {

        try {
    
            const resp = await movieDB.get('/now_playing')
            const result = await resp.data.results
            
            dispatch( onSetmoviesInTheaters( result ) )
            
        } catch (error) {
            console.log("🚀 ~ file: requestsAPI.js ~ line 9 ~ getMovieDB ~ error", error)
            
        }
    
    }

    return {
        //State
        moviesInTheaters,
        loading,

        //Funciones
        startGetMovieDB,
    }

}