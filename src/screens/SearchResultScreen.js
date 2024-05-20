import React, { useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { colors, darkColors } from '../global/styles';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../global/themeContext';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({ route }) => {
    const { filteredRestaurants } = route.params;
    const navigation = useNavigation();
    const { isDarkMode } = useContext(ThemeContext);
    const currentColors = isDarkMode ? darkColors : colors;
  
    return (
        <View style={[styles.container, {backgroundColor: currentColors.pageBackground}]}>
            <FlatList 
                data={filteredRestaurants}
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
                  OnPressRestaurantCard={() => navigation.navigate("RestaurantHomeScreen", { restaurant: item })}
                  backgroundColor={currentColors.cardbackground}
                  textColor={isDarkMode ? 'white' : 'black'} 
              />
                )}
                ListHeaderComponent={
                    <View style={styles.listHeader}>
                        <Text style={[styles.listHeaderText, {color: currentColors.grey1}]}>
                            {filteredRestaurants.length} results for {route.params.foodType}
                        </Text>
                    </View>
                }        
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listHeader: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingTop: 10
    },
    listHeaderText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default SearchResultScreen;
