import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {movieDB} from '../api/movieDB';
import { getEnvVariables } from '../helpers/getEnvVariables';
import {
  onSetMoviesInTheaters,
  onSetMovieId,
  onSetInfoVideos,
  onSetMovieDetails,
  onSetCast,
  onSetSimilarMovie,
  onReset,
  onSetSearch
} from '../store/moviesSlice/moviesSlice';

export const useMovies = () => {

      const dispatch = useDispatch();

      const {
        moviesInTheaters, 
        loading, 
        idMovie, 
        infoVideos, 
        movieDetails,
        cast, 
        similarMovie,
        search
      } = useSelector(state => state.movies);
      

      const { API_KEY } = getEnvVariables();

      const baseURL = 'https://api.themoviedb.org/3';

      const lan = '&language=es-ES'
 

      const startGetMovieDB = async () => {
        try {
          const respNowPlaying = await axios.get(`${baseURL}/movie/now_playing?api_key=${API_KEY}${lan}&page=1`);
          const resultNowPlaying = respNowPlaying.data.results;

          const respNowPlayingTwo = await axios.get(`${baseURL}/movie/now_playing?api_key=${API_KEY}${lan}&page=2`);
          const resultNowPlayingTwo = respNowPlayingTwo.data.results;

          const newArray = [...resultNowPlaying, ...resultNowPlayingTwo]

          // console.log('newArray',JSON.stringify(newArray, null, 3));

          dispatch( onSetMoviesInTheaters(newArray) );

          

          // dispatch( onSetMoviesInTheaters(resultNowPlayingTwo) );
        } catch (error) {
          console.log(error);
        }
      };

      const startGetMovieId = id => {
        dispatch( onSetMovieId(id) );
      };

      const startGetInfoVideos = async () => {
        try {
          //* obtengo los videos
          const respInfoVideos = await movieDB.get(`/movie/${idMovie}/videos`);
          
          //* obtengo los detalles de las peliculas
          const respMovieDetails = await movieDB.get(`/movie/${idMovie}`);

          //* obtengo el casting
          const respCast = await movieDB.get(`/movie/${idMovie}/credits`); 

          //* obtengo las peliculas similares
          const respSimilar = await movieDB.get(`/movie/${idMovie}/similar`);
           
          const [ 
            resultInfoVideos, 
            resultMovieDetails, 
            resultCast, 
            resultSimilar 
          ] = await Promise.all([ respInfoVideos, respMovieDetails, respCast, respSimilar ])

          dispatch( onSetInfoVideos(resultInfoVideos.data.results) );
          dispatch( onSetMovieDetails( resultMovieDetails.data) );
          dispatch( onSetCast(resultCast.data) )
          dispatch( onSetSimilarMovie(resultSimilar.data.results) )

        } catch (error) {
          console.log(error);
        }
      };

      //* resetear informacion de la pelicula
      const startReset = () => {
        dispatch( onReset() )
      }

      const startGetSetSearch = async(keyword ) => {

        try {

          if(keyword){
            const resultSearch = await movieDB.get(`${baseURL}/search/movie?api_key=${API_KEY}${lan}&query=${keyword}`)
            const respSearch = resultSearch.data.results
            dispatch( onSetSearch(respSearch))
          }
          
        } catch (error) {
          console.log(error);
        }
        
      }
      

  return {
    //State
    moviesInTheaters,
    loading,
    idMovie,
    infoVideos,
    movieDetails,
    cast,
    similarMovie,
    search,

    //Functions
    startGetMovieDB,
    startGetMovieId,
    startGetInfoVideos,
    startReset,
    startGetSetSearch
  };
};
