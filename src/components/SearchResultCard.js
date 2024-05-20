import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from "../global/styles";
import ProductCard from './ProductCard';

const SearchResultCard = ({
    OnPressRestaurantCard,
    name,
    nrReviews,
    address,
    farAway,
    averageReview,
    image, 
    productData = [] 
}) => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={OnPressRestaurantCard}>
                <View style={styles.card}>
                    <View style={{ height: 150 }}>
                        <ImageBackground
                            style={{ height: 160 }}
                            source={{ uri: image }} 
                            imageStyle={styles.imageStyle}
                        >
                            <View style={styles.image}>
                                <Text style={styles.text1}>{averageReview}</Text>
                                <Text style={styles.text2}>{nrReviews} review-uri</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={{ paddingTop: 5 }}>
                            <Text style={styles.text5}>{name}</Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.distanceContainer}>
                                <Icon
                                    name="push-pin"
                                    type="material"
                                    color={colors.grey2}
                                    size={18}
                                    iconStyle={{ marginTop: 3, marginLeft: -3 }}
                                />
                                <Text style={styles.distanceText}>{farAway} km</Text>
                            </View>
                            <View style={styles.addressContainer}>
                                <Text style={styles.addressText}>{address}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.productContainer}>
                <FlatList
                    style={{ backgroundColor: colors.cardbackground }}
                    data={productData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ProductCard
                            image={item.image}
                            productName={item.name}
                            price={item.price}
                        />
                    )}
                    horizontal={true}
                />
            </View>
        </View>
    );
};

export default SearchResultCard;


const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderColor: colors.grey4,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 5 // Add padding to create space between the border and margins
    },
    card: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: 'rgba(52, 52, 52,0.4)',
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12
    },
    imageStyle: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    text1: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3
    },
    text2: {
        color: "white",
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0
    },
    infoContainer: {
        flexDirection: "column",
        marginHorizontal: 5,
        marginBottom: 10,
        marginLeft: 0,
        marginTop: 5
    },
    text5: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.grey1,
    },
    distanceContainer: {
        flex: 4,
        flexDirection: "row",
        borderRightWidth: 1,
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
    },
    distanceText: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.grey3
    },
    addressContainer: {
        flex: 9,
        paddingHorizontal: 5,
    },
    addressText: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.grey2,
    },
    productContainer: {
        marginTop: 5,
        paddingBottom: 20
    }
})
