import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './../components/Button';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the POIs App!</Text>
      <Button onPress={() => navigation.navigate('Points of Interest')}>Show POIs</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
