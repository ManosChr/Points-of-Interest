// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// export default function PoisScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Pois Screen</Text>
//       </View>
//     );
//   }

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PoisList from './PoisListScreen';
import PoisMap from './PoisMapScreen';


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