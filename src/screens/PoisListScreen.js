import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PoisList from '../components/PoisList';

export default function PoisListScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>PoisList!</Text>
        <PoisList />
      </View>
    );
  }