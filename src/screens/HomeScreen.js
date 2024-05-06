import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import FoodCard from "../components/FoodCard";
import HomeHeader from "../components/HomeHeader";
import { restaurantMenuExtractor } from '../global/restaurantMenuExtract'; // Assuming this is the correct import path
import { colors } from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await restaurantMenuExtractor();
            setRestaurantData(data);
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={styles.categoriesTextView}>
                    <Text style={styles.categoriesStyle}>Restaurants near you</Text>
                </View>
                <View style={styles.mapRenderer}>
                    {restaurantData.map(restaurant => (
                        <View key={restaurant.id} style={styles.viewRestaurant}>
                            <FoodCard
                                OnPressFoodCard={() => console.log("Pressed", restaurant.name)}
                                screenWidth={SCREEN_WIDTH * 0.95}
                                images={{ uri: restaurant.image }} // Assuming `restaurant.image` is a URL
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
        backgroundColor: colors.grey5,
        paddingVertical: 3,
        paddingHorizontal: 20
    },
    categoriesStyle: {
        color: colors.grey1,
        fontSize: 24,
        fontWeight: "bold"
    },
    mapRenderer: {
        width: SCREEN_WIDTH,
        paddingTop: 10
    },
    viewRestaurant: {
        paddingBottom: 20,
        paddingHorizontal: 10
    }
});
