import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import React from 'react';
import SearchResultCard from '../components/SearchResultCard';
import { restaurantsData } from '../global/Data';
import { colors } from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View>
        <FlatList 
            style={{backgroundColor:colors.cardbackground}}
            data = {restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              images={item.images}
              averageReview={item.averageReview}
              numberOfReviews={item.numberOfReviews}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={item.productData}
            />
            )}

            ListHeaderComponent={
              <View style={styles.listHeader}>
                <Text style={styles.listHeaderText}>
                  {restaurantsData.length} results for {route.params.item}
                </Text>
              </View>
            } 

            showsVerticalScrollIndicator = {false}
        
        />
      </View>
      
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
