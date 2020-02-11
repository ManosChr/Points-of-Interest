// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Button, Header } from './src/components/common';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Header headerText="Points of Interest" />
//       <Button onPress={() => Linking.openURL(url)}>Show POIs</Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });



// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Pois"
//         onPress={() => navigation.navigate('Pois')}
//       />
//     </View>
//   );
// }

// function PoisScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Pois Screen</Text>
//     </View>
//   );
// }

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PoisScreen from './src/screens/PoisScreen';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { Constants, Location, Permissions } from 'expo';

const store = configureStore();
const Stack = createStackNavigator();

function App() {
  findCurrentLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);

		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied'
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ location });
  };
  
  // Top-level navigator
  return (
    <Provider store = { store }>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Points of Interest" component={PoisScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;