import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/rootNavigator';
import 'react-native-gesture-handler';

export default function App(){
  return(
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />

    <RootNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})