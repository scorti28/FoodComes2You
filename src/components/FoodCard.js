import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, darkColors } from '../global/styles';
import { ThemeContext } from '../global/themeContext';

export default function FoodCard({
    OnPressFoodCard,
    restaurantName,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}) {
    const { isDarkMode } = useContext(ThemeContext);
    const currentColors = isDarkMode ? darkColors : colors;

    return (
        <TouchableOpacity onPress={OnPressFoodCard} style={[styles.cardView, {width: screenWidth * 0.90, marginLeft: '5%', marginRight: '5%'}]}>
            <ImageBackground 
                style={styles.image}
                source={images}
                resizeMode='cover'
            />

            <View style={styles.details}>
                <Text style={[styles.restaurantName, {color: currentColors.grey2}]}>{restaurantName}</Text>
                <View style={styles.detailsCard}>
                    <View style={[styles.distance, {borderRightColor: currentColors.grey4}]}>
                        <Icon 
                            name="push-pin"
                            type="material"
                            color={currentColors.grey2}
                            size={18}
                            iconStyle={{marginTop: 3}}
                        />
                        <Text style={[styles.textIcon, {color: currentColors.grey2}]}>{farAway} km</Text>
                    </View>
                    <Text style={[styles.addressText, {color: currentColors.grey2}]}>{businessAddress}</Text>
                </View>
            </View>

            <View style={styles.review}>
                <Text style={styles.averageReview}>{averageReview}</Text>
                <Text style={styles.numberOfReview}>{numberOfReview} review-uri</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 2,
        borderWidth: 1,
        borderColor: '#dddddd',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 150,
        width: '100%'  
    },
    details: {
        padding: 10,
        width: '100%',  
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    detailsCard: {
        flexDirection: "row",
        marginTop: 5
    },
    distance: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        borderRightWidth: 1
    },
    textIcon: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 5
    },
    addressText: {
        fontSize: 12,
        paddingLeft: 10,
        flex: 1
    },
    review: {
        position: "absolute",
        top: 0,
        right: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
        width: 'auto' 
    },
    averageReview: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold'
    },
    numberOfReview: {
        color: "white",
        fontSize: 13
    }
});
