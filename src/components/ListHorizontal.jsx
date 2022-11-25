import { FlatList } from "react-native"
import { MoviePoster } from "./MoviePoster"


export const ListHorizontal = ({ moviesInTheaters }) => {
  return (

        <FlatList 
            data={ moviesInTheaters }
            keyExtractor={ item => item.id.toString() }
            renderItem={ ({ item }) => (
                <MoviePoster 
                    movie={ item }
                    width={ 90 }
                    height={ 120 }
                    marginHorizontal={ 5 }
                    borderRadius={ 10 }
                />
            )}
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
        />

  )
}
