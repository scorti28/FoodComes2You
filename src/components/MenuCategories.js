import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const getCategoryIconName = (category) => {
  switch (category) {
    case 'Pizza': return 'local-pizza';
    case 'Garnituri': return 'dinner-dining';
    case 'Antipasto': return 'dinner-dining';
    case 'Ciorba': return 'soup-kitchen';
    case 'Supa': return 'soup-kitchen';
    case 'Supe': return 'soup-kitchen';
    case 'Porc': return 'kebab-dining';
    case 'Salata': return 'rice-bowl';
    case 'Salate': return 'rice-bowl';
    case 'Salata greceasca': return 'rice-bowl';
    case 'Paste': return 'ramen-dining';
    case 'Fel principal': return 'brunch-dining';
    case 'Feluri principal': return 'brunch-dining';
    case 'Sosuri': return 'liquor';
    case 'Gustari': return 'egg-alt';
    case 'Aperitive': return 'egg-alt';
    case 'Bauturi': return 'local-bar';
    case 'Vita': return 'kebab-dining';
    case 'Carne': return 'kebab-dining';
    case 'Pui': return 'kebab-dining';
    case 'Pasare': return 'kebab-dining';
    case 'Burger': return 'lunch-dining';
    case 'Burgeri': return 'lunch-dining';
    case 'Desert': return 'cake';
    case 'Peste': return 'set-meal';
    case 'Enchiladas': return 'tapas';
    case 'Nakeds': return 'tapas';
    case 'Burritos': return 'fastfood';
    case 'Tacos': return 'fastfood';
    case 'Quesadillas': return 'bento';
    case 'Nachos': return 'takeout-dining';
    case 'Chimichangas': return 'fastfood';
    case 'Paine': return 'bakery-dining';
    case 'Risotto': return 'rice-bowl';
    default: return 'set-meal';
  }
};

const MenuCategories = ({ menu, navigation, isDarkMode, onCategoryPress }) => {
  if (!menu) {
    console.log("Menu data is undefined.");
    return <Text style={{ color: isDarkMode ? 'white' : 'black' }}>No menu available</Text>;
  }

  return (
    <View style={styles.container}>
      {Object.keys(menu).map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.menuItem, { borderColor: isDarkMode ? 'white' : 'lightgray' }]}
          onPress={() => onCategoryPress(category)}
        >
          <View style={[styles.iconContainer, { backgroundColor: isDarkMode ? 'black' : "#F8F8F8" }]}>
            <Icon
              name={getCategoryIconName(category)}
              type="material"
              size={30}
              color={isDarkMode ? 'white' : 'black'}
            />
          </View>
          <Text style={[styles.menuText, { color: isDarkMode ? 'white' : 'black' }]}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  menuItem: {
    width: "40%",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  menuText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MenuCategories;
