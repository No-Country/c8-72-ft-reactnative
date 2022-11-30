import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DetailsScreen, LoginScreen, RegisterScreen, SearchScreen } from '../screens'
import BottomTab from './BottomTab'


const stack = createStackNavigator()

export const StackNavigation = () => {

  return (

    <NavigationContainer
      theme={ DarkTheme }
    >

        <stack.Navigator
           screenOptions={{
              headerShown: false,
              cardStyle: { 
                backgroundColor: '#15141F'
            }
           }} 
        >

          <stack.Screen name='LoginScreen' component={ LoginScreen } />
          <stack.Screen name='RegisterScreen' component={ RegisterScreen } />
          <stack.Screen name="BottomTab" component={ BottomTab } />
          <stack.Screen name="DetailsScreen" component={ DetailsScreen } />
          <stack.Screen name="SearchScreen" component={ SearchScreen } />
          

        </stack.Navigator>

    </NavigationContainer>
    
  )
}
