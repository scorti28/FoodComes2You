import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters, darkColors } from '../global/styles';
import { ThemeContext } from '../global/themeContext';

export default function HomeHeader({navigation}) {
  const BadgeIcon = withBadge(0)(Icon);

  const { isDarkMode } = useContext(ThemeContext); 
    const currentColors = isDarkMode ? darkColors : colors; 

  return (
    <View style={[styles.header, {backgroundColor: currentColors.statusbar}]}>
      <View style={styles.iconContainer}>
        <Icon name="menu-open" color={currentColors.cardbackground} size={32} onPress={() => {navigation.toggleDrawer()}}/>
      </View>

      <View style={styles.titleContainer}>
        <Text style={{ color: currentColors.cardbackground, fontSize: 25, fontWeight: 'bold' }}>FoodComes2You</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: parameters.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cartIconContainer: {
    marginRight: 15,
  },
});
