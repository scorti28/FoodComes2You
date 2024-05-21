import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';

const SearchResultCard = ({
    screenWidth,
    image,
    averageReview,
    nrReviews,
    name,
    farAway,
    address,
    OnPressRestaurantCard,
    backgroundColor
}) => {
    return (
        <TouchableOpacity 
            onPress={OnPressRestaurantCard} 
            style={[styles.card, { backgroundColor, width: screenWidth * 0.90, marginLeft: '5%', marginRight: '8%' }]}
        >
            <ImageBackground 
                source={{ uri: image }} 
                style={styles.image}
                resizeMode="cover"
            >
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.reviewText}>
                        
                        {averageReview} ({nrReviews} reviews)
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.infoContainer}>
                <Text style={styles.addressText}>{address}</Text>
                <Text style={styles.distanceText}>
                    {farAway} km away
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#dddddd',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        height: 200,
        justifyContent: 'flex-end',
        width: '100%'
    },
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay for better contrast
        padding: 10,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', // Ensuring text is white
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for better visibility
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    reviewText: {
        fontSize: 14,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    infoContainer: {
        padding: 10,
        backgroundColor: 'white' // Background to ensure visibility of text
    },
    addressText: {
        fontSize: 16,
        color: 'black', // Black text on a light background
    },
    distanceText: {
        fontSize: 14,
        color: 'black'
    }
});

export default SearchResultCard;
