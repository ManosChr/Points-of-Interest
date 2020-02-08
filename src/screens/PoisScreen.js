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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PoisList from './../components/PoisList';
import PoisMap from './../components/PoisMap';

// function PoisList() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>PoisList!</Text>
//     </View>
//   );
// }

// function PoisMap() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>PoisMap!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function PoisScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="List" component={PoisList} />
        <Tab.Screen name="Map" component={PoisMap} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}