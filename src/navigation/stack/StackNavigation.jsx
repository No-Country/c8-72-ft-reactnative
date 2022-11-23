import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegisterScreen } from '../../screens'


const stack = createStackNavigator()

export const StackNavigation = () => {

  return (

    <NavigationContainer
      theme={ DarkTheme }
    >

        <stack.Navigator
           screenOptions={{
              headerShown: false,
              cardStyle:{
                backgroundColor: 'red'
              }
           }} 
        >

          <stack.Screen name='LoginScreen' component={ LoginScreen } />
          <stack.Screen name='RegisterScreen' component={ RegisterScreen } />

        </stack.Navigator>

    </NavigationContainer>
    
  )
}
