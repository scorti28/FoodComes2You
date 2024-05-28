import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import RestaurantHeader from '../../components/RestaurantHeader';
import { colors, fonts, darkColors } from '../../global/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuCategories from '../../components/MenuCategories';
import { ThemeContext } from '../../global/themeContext';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function RestaurantHomeScreen({ route, navigation }) {
  const { restaurant } = route.params;
  const [liked, setLiked] = useState(false);
  const { isDarkMode } = useContext(ThemeContext); 
  const currentColors = isDarkMode ? darkColors : colors; 

  const likeHandler = () => {
    setLiked(!liked);
  };

  const handleCategoryPress = (category) => {
    const categoryKeys = Object.keys(restaurant.restaurantMenu);
    const selectedIndex = categoryKeys.indexOf(category);
    navigation.navigate("MenuProductsScreen", { restaurant, selectedIndex });
  };

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <ScrollView>
        <RestaurantHeader navigation={navigation} image={restaurant.image} route={route} />
        <View style={styles.restaurantInfo}>
          <Text style={[styles.restaurantName, { color: isDarkMode ? 'white' : currentColors.primary }]}>{restaurant.name}</Text>
          <View style={styles.infoRow}>
            <View style={styles.iconWithText}>
              <MaterialCommunityIcons
                name="star-check-outline"
                color={isDarkMode ? 'white' : currentColors.primary}
                size={28}
              />
              <Text style={[styles.reviewText, { color: isDarkMode ? 'white' : currentColors.text }]}>{restaurant.averageReview} ({restaurant.nrReviews} reviews)</Text>
            </View>
          </View>
          <View style={styles.iconWithText}>
            <MaterialCommunityIcons
              name="pin"
              color={isDarkMode ? 'white' : currentColors.primary}
              size={28}
            />
            <Text style={[styles.reviewText, { color: isDarkMode ? 'white' : currentColors.text }]}>{restaurant.address} ({restaurant.farAway} km)</Text>
          </View>
          <View style={styles.iconWithText}>
            <MaterialCommunityIcons
              name="phone"
              color={isDarkMode ? 'white' : currentColors.primary}
              size={28}
            />
            <Text style={[styles.reviewText, { color: isDarkMode ? 'white' : currentColors.text }]}>{restaurant.phoneNumber}</Text>
          </View>
        </View>
        <View style={[styles.divider, { borderColor: isDarkMode ? 'white' : currentColors.secondary }]} />
        <MenuCategories menu={restaurant.restaurantMenu} navigation={navigation} isDarkMode={isDarkMode} onCategoryPress={handleCategoryPress} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  restaurantInfo: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewText: {
    fontFamily: fonts.android.bold,
    fontSize: 14,
    marginLeft: 5,
  },
  divider: {
    borderBottomWidth: 2,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
});
