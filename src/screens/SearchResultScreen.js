import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import React from 'react';
import SearchResultCard from '../components/SearchResultCard';
import { restaurantsData } from '../global/Data';
import { colors } from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>
          {restaurantsData.length} results for {route.params.item}
        </Text>
      </View>
      <SearchResultCard
        screenWidth={SCREEN_WIDTH}
        images={restaurantsData[0].images}
        averageReview={restaurantsData[0].averageReview}
        numberOfReviews={restaurantsData[0].numberOfReviews}
        restaurantName={restaurantsData[0].restaurantName}
        farAway={restaurantsData[0].farAway}
        businessAddress={restaurantsData[0].businessAddress}
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
