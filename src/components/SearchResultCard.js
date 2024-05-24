import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../global/themeContext';
import { colors, darkColors } from '../global/styles';

const SearchResultCard = ({
    screenWidth,
    image,
    averageReview,
    nrReviews,
    name,
    farAway,
    address,
    OnPressRestaurantCard,
}) => {
    const { isDarkMode } = useContext(ThemeContext);
    const currentColors = isDarkMode ? darkColors : colors;
    const backgroundColor = isDarkMode ? currentColors.cardbackground : colors.cardbackground;

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
                    <View style={styles.reviewContainer}>
                        <MaterialCommunityIcons
                            name="star-check-outline"
                            color={isDarkMode ? "white" : "white"}
                            size={28}
                        />
                        <Text style={[styles.reviewText, {color: "white"}]}>
                            {averageReview} ({nrReviews} reviews)
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={[styles.infoContainer, { backgroundColor: 'white' }]}>
                <Text style={[styles.addressText, {color: 'black'}]}>{address}</Text>
                <View style={styles.iconWithText}>
                    <MaterialCommunityIcons
                        name="pin"
                        color={"black"}
                        size={20}
                    />
                    <Text style={[styles.distanceText, {color: 'black'}]}>{farAway} km</Text>
                </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        padding: 10,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', 
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    reviewText: {
        fontSize: 14,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        padding: 10,
        backgroundColor: 'white' 
    },
    addressText: {
        fontSize: 16,
        color: 'black', 
    },
    iconWithText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distanceText: {
        fontSize: 14,
        marginLeft: 5,
        color: 'black' 
    }
});

export default SearchResultCard;

