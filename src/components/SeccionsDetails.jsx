import { StyleSheet, Text, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';


export const SeccionsDetails = ({ movie, movieDetails }) => {

    const year = movieDetails?.release_date;

  return (

        <>   
            <View style={ styles.containerSectionOne }>

                <Text style={ styles.title }>{movie.title}</Text>

                <View style={{ alignItems: 'center', marginRight: 20, marginTop: 5 }}>

                    <Icon 
                    name="add-circle-outline"
                    size={30}
                    color="#E2E2E3"
                    />

                    <Text style={{ color: '#E2E2E3', fontSize: 12 }}>Mi Lista</Text>

                </View>

            </View>

            <View style={styles.containerSectionTwo}>

              <Icon
                name="time-outline"
                size={16}
                color="#9D9D9F"
                style={{marginLeft: 20, width: 20}}
              />

              <Text style={{color: '#9D9D9F', fontSize: 12}}>
                {movieDetails.runtime} Minutos &bull; {''} {year?.slice(0, 4)}{' '}
                &bull; {''} <Text style={{fontSize: 10}}>+</Text>
                {movieDetails.adult ? '18' : '13'}
              </Text>

            </View>             
        </>
    
  )
}

const styles = StyleSheet.create({
    containerSectionOne: {
      marginHorizontal: 20,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 20,
    },
    containerSectionTwo: {
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
    },
    title: {
        color: '#E2E2E3',
        fontSize: 22,
        fontWeight: '600',
        width: 200,
    },
})
