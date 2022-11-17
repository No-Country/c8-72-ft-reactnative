import { StyleSheet, Text, View } from "react-native";


const App = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text}>Hola mundo</Text>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
    container:{
      backgroundColor: '#262335',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
      color: '#F92789',
      fontSize: 25
    }
});