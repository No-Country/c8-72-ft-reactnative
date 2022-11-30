import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View, TextInput } from "react-native"

import Icon  from "react-native-vector-icons/Ionicons";


export const SearchHeader = () => {

  const navigation =  useNavigation()

  return (

    <View style={{ marginBottom: 30, marginLeft: 20 }}>
      
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
            editable={ false }
          />

        <Icon 
            name="filter-outline"
            size={ 30 }
            color="#FFF"
            style={ styles.iconFilter}
        />

        <Pressable
          onPress={ () => {
            navigation.navigate('SearchScreen')
          }}
          style={ styles.pressInput }
        />

    </View>

  )
}

const styles = StyleSheet.create({
  searchInput:{
    backgroundColor: '#211F30',
    width: 300,
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
    iconFilter: {
      position: 'absolute',
      right: 25,
      bottom: 5,
      opacity: 0.8
    },
    pressInput: { 
      zIndex: 100, 
      height: 50, 
      width: 240, 
      position:'absolute',
      bottom: 0,
      left:70
    }
});
