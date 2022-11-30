import { View } from "react-native"
import { useNavigation } from "@react-navigation/native";

import YoutubePlayer from "react-native-youtube-iframe";
import Icon  from "react-native-vector-icons/Ionicons";

export const VideoYoutube = ({ infoVideos, startReset }) => {

    const navigation =  useNavigation();
    
  return (
        <View style={{ paddingTop: 10, backgroundColor: '#000'}}>
            <Icon 
                name="chevron-back-outline"
                size={35}
                color="#FFF"
                style={{ marginLeft: 20, width: 50, opacity: 0.6 }}
                onPress={ () => {
                    navigation.goBack()
                    startReset()
                }}
            />
            <Icon 
                name="share-social"
                size={30}
                color="#FFF"
                style={{ right: 20, position: 'absolute', marginTop: 10, opacity: 0.8 }}
            /> 
            <YoutubePlayer
                height={250}
                play={false}
                videoId={ infoVideos?.length === 2 ? infoVideos[1]?.key : infoVideos[0]?.key }
        
            />
        </View>
  )
}
