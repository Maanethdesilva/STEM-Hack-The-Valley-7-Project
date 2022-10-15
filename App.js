import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import HTVButton from './Components/HTVButton/HTVButton';

export default function App() {
  const [name, setName] = useState(1)
  return (
    <View style={styles.container}>
      <Text>Hello world! hi { name }</Text>
      <HTVButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
