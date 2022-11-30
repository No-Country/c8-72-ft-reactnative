import { useEffect } from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native"

import { CarouselMovie } from "../components/CarouselMovie";
import { ListHorizontal } from "../components/ListHorizontal";
import { Loading } from "../components/Loading";
import { SearchHeader } from "../components/SearchHeader";
import { useGenres } from "../hooks/useGenres";
import { useMovies } from "../hooks/useMovies"




export const HomeScreen = () => {

  const { moviesInTheaters, loading, startGetMovieDB, startGetNextPage } = useMovies();

  const { action, adventure, comedy, fantasy, romance, horror } = useGenres();

    useEffect(() => {

      const getMovie = async() => {
        await startGetMovieDB()

      }

      getMovie()

    
    }, [])
    

  return (

      <ScrollView>

        <View style={{ flex: 1, paddingBottom: 30, backgroundColor: '#15141F' }}>
        

          {
            loading 
            ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 800}}>
                  <Loading />
                </View>
              )
            : (
                <View>
                  <Text style={ styles.titleMain }>Encuentra lo que quieres ver ahora.</Text>

                    <SearchHeader />

                  <Text style={{ color:'#E2E2E2', marginLeft: 20, marginBottom: 15, fontSize: 15}}>Recomendaciones para ti</Text>

                  <CarouselMovie moviesInTheaters={ moviesInTheaters } startGetNextPage={ startGetNextPage } />

                  {/* FlatList */}

                  <ListHorizontal moviesGenres={ action } startGetNextPage={ startGetNextPage } title={'Acción'} />
                  <ListHorizontal moviesGenres={ adventure } startGetNextPage={ startGetNextPage } title={'Aventura'} />
                  <ListHorizontal moviesGenres={ comedy } startGetNextPage={ startGetNextPage } title={'Comedia'} />
                  <ListHorizontal moviesGenres={ fantasy } startGetNextPage={ startGetNextPage } title={'Fantasía'} />
                  <ListHorizontal moviesGenres={ romance } startGetNextPage={ startGetNextPage } title={'Romance'} />
                  <ListHorizontal moviesGenres={ horror } startGetNextPage={ startGetNextPage } title={'Terror'} />
                
                </View>
              )

          }      
          
        </View>

      </ScrollView>

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