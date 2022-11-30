import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen, MyListScreen, ProfileScreen, RecommendationsScreen } from '../screens';

const TabBottom = createBottomTabNavigator();

const BottomTab = () => {

  return (
    <TabBottom.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          backgroundColor: '#211F30',
        },
        headerShown: false


      }}
    >

      <TabBottom.Screen 
        name="HomeScreen" 
        component={ HomeScreen } 
        options={{
          tabBarLabelStyle: { color: '#747474', marginBottom: 5 },
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <Icon 
              name="home-outline"
              color="#747474"
              size={ 25 }
              focused={ true }
            />
          )
        }}
      />

      <TabBottom.Screen 
        name="MyListScreen" 
        component={ MyListScreen } 
        options={{
          tabBarLabelStyle: { color: '#747474', marginBottom: 5 },
          tabBarLabel: 'Mi lista',
          tabBarIcon: ({ focused }) => (
            <Icon 
              name="list-outline"
              color="#747474"
              size={ 25 }
              focused={ true }
            />
          )
        }}
      />

      <TabBottom.Screen 
        name="RecommendationsScreen" 
        component={ RecommendationsScreen } 
        options={{
          tabBarLabelStyle: { color: '#747474', marginBottom: 5 },
          tabBarLabel: 'Recomendaciones',
          tabBarIcon: ({ focused }) => (
            <Icon 
              name="people-outline"
              color="#747474"
              size={ 25 }
              focused={ true }
            />
          )
        }}
      />

      <TabBottom.Screen 
        name="ProfileScreen" 
        component={ ProfileScreen } 
        options={{
          tabBarLabelStyle: { color: '#747474', marginBottom: 5 },
          tabBarLabel: 'Mi perfil',
          tabBarIcon: ({ focused }) => (
            <Icon 
              name="person-outline"
              color="#747474"
              size={ 25 }
              focused={ true }
            />
          )
        }}
      />
      
    </TabBottom.Navigator>
  );
}

export default BottomTab;