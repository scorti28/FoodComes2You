import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from '../global/styles';

export default function HomeHeader({navigation}) {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <Icon name="menu-open" color={colors.cardbackground} size={32} onPress={() => {navigation.toggleDrawer()}}/>
      </View>

      <View style={styles.titleContainer}>
        <Text style={{ color: colors.cardbackground, fontSize: 25, fontWeight: 'bold' }}>FeastFinder</Text>
      </View>

      <View style={styles.cartIconContainer}>
        <BadgeIcon type="material-community" name="shopping" size={35} color={colors.cardbackground} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
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
