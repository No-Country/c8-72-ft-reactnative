import { StyleSheet, TextInput, View } from "react-native"

import Icon  from "react-native-vector-icons/Ionicons";


export const SearchHeader = () => {
  return (

    <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>

        <Icon 
            name="search-outline"
            size={ 25 }
            color="#FFF"
            style={ styles.iconSearch }
        />
        <TextInput 
            placeholder="Buscar una serie o peli"
            placeholderTextColor='#6E6D76'
            cursorColor='#FFF'
            style={ styles.searchInput }
        />
        <Icon 
            name="filter-outline"
            size={ 30 }
            color="#FFF"
            style={ styles.iconFilter}
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
        width: 30
      },
      iconFilter: {
        position: 'absolute',
        right: 25,
        bottom: 5
      }
    
});
