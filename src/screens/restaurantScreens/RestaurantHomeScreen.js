import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import RestaurantHeader from '../../components/RestaurantHeader';
import { colors, fonts } from '../../global/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuCategories from '../../components/MenuCategories';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function RestaurantHomeScreen({ route, navigation }) {
  const { restaurant } = route.params;
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <RestaurantHeader navigation={navigation} image={restaurant.image} />
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <View style={styles.infoRow}>
            <View style={styles.iconWithText}>
              <MaterialCommunityIcons
                 name="star-check-outline"
                 color={colors.primary}
                 size={28}
              />
              <Text style={styles.reviewText}>{restaurant.averageReview} ({restaurant.nrReviews} reviews)</Text>
            </View>
          </View>
          <View style={styles.iconWithText}>
              <MaterialCommunityIcons
                 name="pin"
                 color={colors.primary}
                 size={28}
              />
              <Text style={styles.reviewText}>{restaurant.farAway} km</Text>
            </View>
        </View>
        <View style={styles.divider} />
        <MenuCategories menu={restaurant.restaurantMenu} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Adds a global background color
  },
  restaurantInfo: {
    paddingHorizontal: 20,
    paddingVertical: 15, // Increased padding for better spacing
  },
  restaurantName: {
    fontSize: 24, // Larger font size for emphasis
    fontWeight: 'bold',
    color: colors.primary, // Use primary color for better focus
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distributes space evenly
  },
  reviewText: {
    fontFamily: fonts.android.bold,
    fontSize: 14, // Slightly larger font for readability
    color: colors.text, // Adjusted for better contrast
    marginLeft: 5, // Reduced for proximity
  },
  divider: {
    borderBottomWidth: 2, // Thicker divider for clear separation
    borderColor: colors.secondary, // Secondary color for variety
    marginHorizontal: 20,
    marginVertical: 20, // Increased margin for visual separation
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15, // Adjusted for visual balance
  },
});
