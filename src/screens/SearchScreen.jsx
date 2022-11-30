import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import Icon  from "react-native-vector-icons/Ionicons";
import { ListSearch } from "../components/ListSearch";
import { useMovies } from "../hooks/useMovies";

export const SearchScreen = ({ navigation }) => {

  const [ focus , setFocus ] = useState(false)

  

  const { search, startGetSetSearch, startReset } = useMovies()


  useEffect( () => {
    setFocus(true)
  }, [])


  return (

      <View style={{ marginHorizontal: 20 }}>

        <Icon 
            name="search-outline"
            size={ 25 }
            color="#FFF"
            style={ styles.iconSearch }
        />


        <TextInput 
            placeholder="Buscar una pelicula"
            placeholderTextColor='#6E6D76'
            cursorColor='#FFF'
            style={ styles.searchInput }
            editable={ focus }
            autoFocus={ focus }
            onChangeText={ startGetSetSearch }
          />
         
          <Icon 
            name="close-circle-outline"
            size={ 30 }
            color="#FFF"
            style={ styles.iconCancel }
            onPress={ () => {
              navigation.goBack()
              setFocus(false)
              startReset()
            }}
          />

          <ListSearch search={ search } startReset={startReset} />
                 

      </View>
  )
}

const styles = StyleSheet.create({
    searchInput:{
      backgroundColor: '#211F30',
      width: 350,
      paddingLeft: 55,
      borderRadius: 30,
      zIndex: 4,
      color: '#FFF',
      fontWeight: '600'
    },
    iconSearch:{
      top: 37,
      left: 20,
      zIndex: 5,
      width: 30,
      opacity: 0.8
    },
    iconCancel: {
      position: 'absolute',
      top: 35,
      right: 20,
      zIndex: 5,
      opacity: 0.8
    }
})