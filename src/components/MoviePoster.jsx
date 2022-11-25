import { View, Text, Image, StyleSheet } from 'react-native'



export const MoviePoster = ({ 
  movie, 
  width = 160, 
  height = 230, 
  title = false, 
  marginHorizontal = 0 ,
  borderRadius = 18,
}) => {

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  return (
    <>
      <View style={{ ...styles.containerImg, width, height, marginHorizontal, borderRadius }}>
        <Image 
            source={{ uri }}
            style={{ ...styles.img, borderRadius }}
        />
        
      </View>
      <Text style={ styles.title}>{title && movie.title}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  containerImg:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 10,
  },
  img: { 
    flex: 1,
  },
  title:{
    color: '#E2E2E2',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12
  }

});

