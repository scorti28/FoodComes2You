import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { colors } from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

  const SearchResultScreen = ({ route }) => {
    const { filteredRestaurants } = route.params; // Ensure this line is correctly fetching the passed data
  
    return (
      <View style={styles.container}>
        <FlatList 
          data={filteredRestaurants} // Use directly the filtered data
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              image={item.image}
              averageReview={item.averageReview}
              nrReviews={item.nrReviews}
              name={item.name}
              farAway={item.farAway}
              address={item.address}
              OnPressRestaurantCard={() => navigation.navigate("RestaurantHomeScreen", {id: item.id, restaurant: item.name})}
            />
          )}
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>
                {filteredRestaurants.length} results for {route.params.foodType}
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  listHeaderText: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold'
  },
});
