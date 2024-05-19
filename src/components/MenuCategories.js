import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const getCategoryIconName = (category) => {
  switch (category) {
    case 'Pizza':
      return 'local-pizza';
    case 'Salad':
      return 'emoji-food-beverage';
    case 'Drink':
      return 'local-drink';
    case 'Home':
      return 'home';
    case 'Love':
      return 'favorite';
    case 'Family':
      return 'group';
    case 'Friends':
      return 'people';
    case 'School':
      return 'school';
    // Add more cases as needed
    default:
      return 'restaurant-menu';
  }
};

const MenuCategories = ({ menu, navigation }) => {
  if (!menu) {
    console.log("Menu data is undefined.");
    return <Text>No menu available</Text>;
  }

  console.log("Menu Categories:", Object.keys(menu));

  const handleCategoryPress = (category) => {
    // Navigate to MenuProductsScreen and pass the selected category
    navigation.navigate("MenuProductsScreen", { category });
  };

  return (
    <View style={styles.container}>
      {Object.keys(menu).map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => handleCategoryPress(category)}
        >
          <View style={styles.iconContainer}>
            <Icon
              name={getCategoryIconName(category)} // Customize icon based on category
              type="material"
              size={40}
              color="white"
            />
          </View>
          <Text style={styles.menuText}>{category}</Text>
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
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
    paddingVertical: 20,
  },
  menuItem: {
    width: "40%", // Adjust the width based on your preference
    alignItems: "center",
    margin: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#48C9B0", // Background color for the icon
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  menuText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#34495E", // Text color
    textAlign: "center",
  },
});

export default MenuCategories;
