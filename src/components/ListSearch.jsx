import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import { MoviePoster } from './MoviePoster'


export const ListSearch = ({ search }) => {


  return (

        <View style={{ paddingTop: 20, paddingBottom: 65}}>
            <FlatList 
                data={ search }
                keyExtractor={ item => item.id }
                renderItem={ ({ item }) => (
                    <>
                        <View style={ styles.cardsMovies }>
                            <MoviePoster 
                                movie={ item }
                                width={ 60}
                                height={ 65 }
                                borderRadius={ 10 }

                            />
                            <View style={{ width: 300}}>

                                <Text style={ styles.title }>{item.title}</Text>

                                <View style={styles.containerSectionTwo}>

                                    <Icon
                                        name="time-outline"
                                        size={16}
                                        color="#9D9D9F"
                                        style={{  width: 20}}
                                    /> 

                                    <Text style={{color: '#9D9D9F', fontSize: 12}}>Minutos &bull; {''} 
                                        {item?.release_date?.slice(0, 4) ?? ''}{' '}
                                        &bull; {''} <Text style={{fontSize: 10}}>+</Text>
                                        {item.adult ? '18' : '13'}
                                    </Text>

                                </View>
                                
                            </View>

                        </View>
                        <View style={styles.separator} />
                    </>
                )}
                showsVerticalScrollIndicator={ false }
            />
        </View>
        
  )
}

const styles = StyleSheet.create({
  cardsMovies: {
    flexDirection: 'row',
    right: 16,
    height: 65
  },
  title: {
    color: '#E2E2E2', 
    width: 250, 
    height: 35,
    flexWrap: 'wrap'
},
  containerSectionTwo: {
    flexDirection: 'row',
    marginTop: 2,
    justifyContent: 'flex-start',
  },
  separator: {
    backgroundColor: '#E2E2E3',
    height: 0.4,
    opacity: 0.1,
    marginHorizontal: 5,
    marginVertical: 7,
  },
});
