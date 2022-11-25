import { useEffect } from "react"
import { Text, View, StyleSheet } from "react-native"

import { CarouselMovie } from "../components/CarouselMovie";
import { ListHorizontal } from "../components/ListHorizontal";
import { Loading } from "../components/Loading";
import { SearchHeader } from "../components/SearchHeader";
import { useMovies } from "../hooks/useMovies"




export const HomeScreen = () => {

    const { moviesInTheaters, loading, startGetMovieDB } = useMovies();

    useEffect(() => {

      const getMovie = async() => {
        await startGetMovieDB()
      }

      getMovie()
    
    }, [])
    

  return (
    <View style={{ flex: 1 }}>
      

      {
        loading 
        ? (
            <Loading />
          )
        : (
            <View>
              <Text style={ styles.titleMain }>Encuentra lo que quieres ver ahora.</Text>

                <SearchHeader />

              <Text style={{ color:'#E2E2E2', marginLeft: 25, marginBottom: 15, fontSize: 15}}>Recomendaciones para ti</Text>

              <CarouselMovie moviesInTheaters={ moviesInTheaters } />

              <View style={{ height: 170, paddingTop: 5 }}>
                <Text style={{ color: '#E2E2E2', fontWeight: '600', marginBottom: 10, marginLeft: 5 }}>Acción</Text>
                <ListHorizontal moviesInTheaters={ moviesInTheaters } />

              </View>

            </View>
          )

      }      
        
    </View>
  )
}

const styles = StyleSheet.create({
  titleMain:{ 
    color: '#FFF', 
    width: 200,
    height: 50,
    marginTop: 20,
    marginLeft: 20,
    fontSize: 22,
    lineHeight: 25,
    fontWeight: '600'
  },
})