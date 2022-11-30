import {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {SvgXml} from 'react-native-svg';

import {useMovies} from '../hooks/useMovies';
import {Loading, VideoYoutube, ListCast, ListHorizontal} from '../components';
import netflix from '../../assets/netflix';
import { SeccionsDetails } from '../components/SeccionsDetails';

export const DetailsScreen = ({route}) => {
  const {
    loading,
    idMovie,
    infoVideos,
    movieDetails,
    cast,
    similarMovie,
    startGetInfoVideos,
    startReset,
  } = useMovies();

  const movie = route.params;

  useEffect(() => {
    const video = async () => {
      await startGetInfoVideos();
    };
    video();
  }, [idMovie]);



  return (

      <View style={{flex: 1}}>

        {loading ? (
          <Loading />
        ) 
        : (
            <ScrollView>

              <View>

                {/* Video de YouTube */}

                <VideoYoutube infoVideos={infoVideos} startReset={startReset} />

                <SeccionsDetails movie={ movie } movieDetails={ movieDetails } />

                <View style={styles.separator} />

                {/* Genero */}

                <View style={{marginHorizontal: 20, height: 80}}>

                  <Text style={{color: '#C5C4C7', fontSize: 15}}>Género</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      paddingTop: 5,
                      flex: 1,
                      flexWrap: 'wrap',
                    }}>

                    { movieDetails?.genres 
                      &&  (
                            movieDetails?.genres.map(genre => (
                              <View key={genre.id} style={styles.genres}>

                                <Text style={{color: '#9D9D9F', fontSize: 12}}>{genre.name}</Text>
                                
                              </View>
                            ))
                          )
                        
                    }

                  </View>

                </View>

                <View style={styles.separator} />

                {/* Ver en */}

                <View style={{marginHorizontal: 20, height: 80, marginBottom: 5}}>

                  <Text style={{color: '#C5C4C7', fontSize: 15}}>Ver en</Text>

                  <View style={{flexDirection: 'row', paddingTop: 10}}>

                    <View
                      style={{
                        borderRadius: 10,
                        backgroundColor: '#000',
                        height: 55,
                        alignItems: 'center',
                        width: 55,
                      }}>

                      <SvgXml xml={netflix} width={50} height={55} />

                    </View>

                  </View>

                </View>

                <View style={styles.separator} />

                {/* Sinopsis */}

                <View style={{marginHorizontal: 20, height: 70, marginBottom: 20}}>

                  <Text style={{color: '#C5C4C7', fontSize: 15, marginBottom: 5}}>Sinopsis</Text>
                  <Text style={{color: '#C5C4C7', fontSize: 11}}>{movieDetails.overview}</Text>

                </View>

                <View style={styles.separator} />

                {/* Cast */}

                <View style={styles.containerCast}>

                  <ListCast cast={cast} />

                </View>

                <View style={styles.separator} />

                {/* Similar */}

                <View style={{marginBottom: 20}}>

                  <Text style={{color: '#C5C4C7', fontSize: 15, marginLeft: 20}}>Peliculas Relacionadas</Text>

                  <ListHorizontal moviesGenres={similarMovie} />

                </View>

              </View>

            </ScrollView>
          )
      }

      </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#E2E2E3',
    height: 0.4,
    opacity: 0.1,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  genres: {
    borderRadius: 15,
    borderColor: '#B6B6B9',
    borderWidth: 1.2,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 1,
    marginTop: 4,
  },
  containerCast: {
    height: 85,
    marginBottom: 2,
    paddingTop: 10,
  },
});
