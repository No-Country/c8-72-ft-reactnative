import { FlatList, Text, View } from "react-native"
import { MoviePoster } from "./MoviePoster"


export const ListHorizontal = ({ moviesGenres, title }) => {

  return (

        <View style={{ height: 180, paddingTop: 5 }}>

            <Text style={{ color: '#E2E2E2', fontWeight: '600', marginBottom: 10, marginLeft: 20 }}>{title}</Text>

            <FlatList 
                data={ moviesGenres }
                keyExtractor={ item => item.id }
                renderItem={ ({ item }) => (
                    <MoviePoster 
                        movie={ item }
                        width={ 90 }
                        height={ 120 }
                        marginLeft={ 20 }
                        borderRadius={ 10 }
                        title={ item.title }
                        sizeText={ 9 }
                    />
                )}
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                // onEndReached={ () => startGetNextPage()}
                // onEndReachedThreshold={ 0.1 }
            />
        </View>
  )
}
