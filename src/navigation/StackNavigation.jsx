import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, DetailsScreen, LoginScreen, RegisterScreen } from '../screens'


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

          <stack.Screen name="HomeScreen" component={ HomeScreen } />
          <stack.Screen name='LoginScreen' component={ LoginScreen } />
          <stack.Screen name='RegisterScreen' component={ RegisterScreen } />
          <stack.Screen name="DetailsScreen" component={ DetailsScreen } />

        </stack.Navigator>

    </NavigationContainer>
    
  )
}
