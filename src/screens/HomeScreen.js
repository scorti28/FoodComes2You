import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import FoodCard from "../components/FoodCard";
import HomeHeader from "../components/HomeHeader";
import { restaurantMenuExtractor } from '../global/restaurantMenuExtract';
import { colors, darkColors } from '../global/styles'; // Import darkColors
import { ThemeContext } from '../global/themeContext';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation, route }) {
    const { isDarkMode } = useContext(ThemeContext); // Use ThemeContext
    const currentColors = isDarkMode ? darkColors : colors; // Determine current colors
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        if (route.params?.sortedRestaurants) {
            setRestaurantData(route.params.sortedRestaurants);
        } else {
            const fetchData = async () => {
                const data = await restaurantMenuExtractor();
                setRestaurantData(data);
            };
            fetchData();
        }
    }, [route.params?.sortedRestaurants]);

    return (
        <View style={[styles.container, { backgroundColor: currentColors.pageBackground }]}>
            <HomeHeader navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={[styles.categoriesTextView, { backgroundColor: currentColors.grey5 }]}>
                    <Text style={[styles.categoriesStyle, { color: currentColors.grey1 }]}>Restaurantele din apropirea ta</Text>
                </View>
                <View style={[styles.mapRenderer, { color: currentColors.grey1 }]}>
                    {restaurantData.map(restaurant => (
                        <View key={restaurant.id} style={styles.viewRestaurant}>
                            <FoodCard
                                OnPressFoodCard={() => navigation.navigate("RestaurantHomeScreen",{
                                    restaurant: restaurant,
                                    fromHomeScreen: true  
                                })}
                                screenWidth={SCREEN_WIDTH * 0.95}
                                images={{ uri: restaurant.image }}
                                restaurantName={restaurant.name}
                                farAway={restaurant.farAway}
                                businessAddress={restaurant.address}
                                averageReview={restaurant.averageReview}
                                numberOfReview={restaurant.nrReviews}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    categoriesTextView: {
        paddingVertical: 3,
        paddingHorizontal: 20
    },
    categoriesStyle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    mapRenderer: {
        width: SCREEN_WIDTH,
        paddingTop: 10
    },
    viewRestaurant: {
        alignItems: 'center', // Center the content horizontally
        paddingBottom: 20,
        paddingHorizontal: 10
    }
});
