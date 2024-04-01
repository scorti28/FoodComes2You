import HomeHeader from "../components/HomeHeader";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Animated } from 'react-native'; // Animated added
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import {filterData, restaurantsData} from '../global/Data';
import FoodCard from "../components/FoodCard";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation, route }) {
    return (
        <View style={styles.container}>
            {/* Your existing code */}
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View style={styles.categoriesTextView}>
                    <Text style={styles.categoriesStyle}>Restaurants near you</Text>
                </View>
                <View style={styles.mapRenderer}>
                    {
                        restaurantsData.map((item, index) => (
                            <View key={index} style={styles.viewRestaurant}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReviews}
                                    OnPressFoodCard={() => navigation.navigate("RestaurantHomeScreen", { id: index, restaurant: item.restaurantName })}
                                />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },
    filterView:{
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-evenly", 
        marginHorizontal:10, 
        marginVertical:10
    },
    nowIcon:{
        flexDirection:"row", 
        alignItems:"center", 
        marginLeft:20,
        backgroundColor:colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
    },
    mapIcon:{
        flexDirection:"row", 
        alignItems:"center", 
        paddingLeft:20
    },
    lineComponent:{
        flexDirection:"row", 
        backgroundColor:colors.grey5, 
        borderRadius:15, 
        paddingVertical:3,
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    deliveryCofiguration:{
        marginTop: 10, 
        flexDirection: 'row', 
        justifyContent: "space-evenly"
    },
    categoriesStyle:{
        color:colors.grey1,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:20
    },
    categoriesTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    }, 
    imageCardStyle:{
        height:60,
        width:60,
        borderRadius:30
    },
    textCardSelectedStyle:{
        fontWeight:"bold",
        color: colors.cardbackground
    },
    textCardNotSelectedStyle:{
        fontWeight:"bold",
        color: colors.grey2
    },
    restaurantList:{
        marginTop:10,
        marginBottom:10
    },
    mapRenderer:{
        width:SCREEN_WIDTH,
        paddingTop: 10
    },
    viewRestaurant:{
        paddingBottom:20
    },
    tabScrolling:{
        backgroundColor: colors.cardbackground,
        paddingBottom:5
    },
    countDown:{
        flexDirection:"row",
        alignItems:"center"
    },
    countDownText:{
        marginLeft:15,
        fontSize:16,
        marginTop:-10,
        marginRight:5
    },
    floatingButton:{
        position:"absolute",
        bottom:10,
        right:15,
        backgroundColor:"white",
        elevation:10, 
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center"
    },
    mapStyle:{
        color:colors.grey2
    }

});
