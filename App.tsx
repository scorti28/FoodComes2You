import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar, LogBox } from 'react-native';
import { colors, darkColors } from './src/global/styles'; // Import darkColors
import RootNavigator from './src/navigation/rootNavigator';
import 'react-native-gesture-handler';
import { SignInContextProvider } from './src/contexts/authContext';
import { ThemeProvider, ThemeContext } from './src/global/themeContext';

LogBox.ignoreAllLogs();

function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);
  const currentColors = isDarkMode ? darkColors : colors;

  return (
    <View style={[styles.container, { backgroundColor: currentColors.pageBackground }]}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={currentColors.statusbar}
      />
      <RootNavigator />
    </View>
  );
}

export default function App() {
  return (
    <SignInContextProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
