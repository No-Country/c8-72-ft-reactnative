import { Image, StyleSheet, Text, View } from "react-native"


export const Cast = ({ cast }) => {

    const uri = `https://image.tmdb.org/t/p/w500${ cast?.profile_path }`

  return (

            <>
                {
                cast?.profile_path 
                    &&  (
                            <View style={{ width: 80, marginLeft: 10}}>
                                <Image 
                                    source={{ uri }}
                                    style={ styles.img}
                                />
                                <Text style={ styles.name }>{ cast.name }</Text>
                            </View>
                        )
                
                }
            </>
        
            
        
   

  )
}

const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 50,
        borderRadius: 50,
     },
    name: {
        color: '#C5C4C7', 
        fontSize: 9, 
        marginHorizontal: 6,
        marginTop: 2
    },
});
