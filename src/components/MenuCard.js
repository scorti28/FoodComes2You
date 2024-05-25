import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, darkColors } from '../global/styles';

export default function MenuCard({ name, price, quantity, details, isDarkMode }) {
  const currentColors = isDarkMode ? darkColors : colors;

  return (
    <View style={[styles.view1, { backgroundColor: isDarkMode ? '#2E8B57' : '#f0f0f0' }]}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={[styles.text1, { color: currentColors.text }]}>{name}</Text>
          <View>
            <Text style={[styles.text2, { color: currentColors.text }]}>{details}</Text>
          </View>
          <Text style={[styles.text3, { color: currentColors.text }]}>{price}</Text>
        </View>
        <Text style={[styles.text3, { color: currentColors.text }]}>{quantity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    elevation: 4,
    shadowOpacity: 0.4,
    shadowColor: "black",
    margin: 5,
    padding: 10,
  },
  view2: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    justifyContent: "space-between",
  },
  view3: {
    flex: 6,
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 15,
    marginRight: 2,
  },
  text3: {
    fontSize: 15,
  },
});
