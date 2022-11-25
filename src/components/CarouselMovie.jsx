import { Dimensions } from "react-native";

import Carousel from "react-native-snap-carousel";

import { MoviePoster } from "./MoviePoster";


const { width: screenWidth } =  Dimensions.get('window')

export const CarouselMovie = ({ moviesInTheaters }) => {

  return (


    <Carousel 
        data={ moviesInTheaters }
        renderItem={ ({ item }) => (
          <MoviePoster movie={ item } title={ true } />
        )}
        sliderWidth={ screenWidth }
        itemWidth={ 150 }
        autoplay={ true }
        autoplayDelay={ 1000 }
        loop={ true }
        inactiveSlideOpacity={ 0.5 }  
        inactiveSlideScale={ 0.7 }
        autoplayInterval={ 3000 }
    />

  
  )
}
