import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PoisList from '../components/PoisList';
import PoisMap from '../components/PoisMap';

// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function PoisScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'List') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Map') {
            iconName = 'ios-map';
          }

          // Return the icon
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#007aff',
        inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="List" component={PoisList} />
        <Tab.Screen name="Map" component={PoisMap} />
    </Tab.Navigator>
  );
}