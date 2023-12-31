import React from 'react';
import {View, Text, StyleSheet, StatusBar, LogBox} from 'react-native';
import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/rootNavigator';
import 'react-native-gesture-handler';
import { SignInContextProvider } from './src/contexts/authContext';


LogBox.ignoreAllLogs();

export default function App(){
  return(
    <SignInContextProvider>
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />

    <RootNavigator />
    </View>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})