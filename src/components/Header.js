import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, parameters } from '../global/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({ title, type, navigation }) {
  return (
    <View style={styles.header}>
      <Icon
        name={type}
        color={colors.headerText}
        size={28}
        onPress={() => {navigation.goBack()}}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    paddingHorizontal: 10,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
