import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen';

export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <View style={{ width: 10 }} /> 
        <Button title="Button 2" onPress={() => console.log("Button 2 pressed")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange children horizontally
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
