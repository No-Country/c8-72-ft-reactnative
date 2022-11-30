import { useMovies } from "./useMovies"


export const useGenres = () => {

    const { moviesInTheaters } = useMovies();

    //* peliculas de accion
    const action = moviesInTheaters.filter( act => (
        act.genre_ids?.includes(28) === true
    ))
    //* peliculas de aventura
    const adventure = moviesInTheaters.filter( act => (
        act.genre_ids?.includes(12) === true
    ))
    //* peliculas de comedia
    const comedy = moviesInTheaters.filter( act => (
        act.genre_ids?.includes(35) === true
    ))
    //* peliculas de fantasia
    const fantasy = moviesInTheaters.filter( act => (
        act.genre_ids?.includes(14) === true
    ))
    //* peliculas de romance
    const romance = moviesInTheaters.filter( act => (
        act.genre_ids?.includes(10749) === true
    ))
    //* peliculas de terror
    const horror = moviesInTheaters.filter( act => (
        act.genre_ids?.includes(27) === true
    ))
    
    return {
        action,
        adventure,
        comedy,
        fantasy,
        romance,
        horror,
    }
    
    
}
